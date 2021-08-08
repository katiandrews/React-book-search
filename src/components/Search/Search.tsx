import { useState } from "react";
import { getBooks } from "../../api/book-search";
import SearchIcon from "../../assets/search.svg";
import { IBook } from "../../interfaces/IBook";
import { ISearch } from "../../interfaces/ISearch";
import { calculatePages } from "../../shared/calculatePages";
import { Button } from "../Button/Button";
import s from "./Search.css";

interface IProps {
  setBooks: React.Dispatch<React.SetStateAction<IBook[] | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchState: React.Dispatch<React.SetStateAction<ISearch>>;
  searchState: ISearch;
  setPages: React.Dispatch<React.SetStateAction<number>>;
}

export function Search({
  setBooks,
  setLoading,
  setSearchState,
  searchState,
  setPages,
}: IProps) {
  const changeState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchState({ ...searchState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    getBooks(searchState.search, searchState.sort, searchState.quantity).then(
      (books) => {
        setLoading(false);
        setBooks(books.items);
        setPages(calculatePages(books.totalItems, searchState.quantity));
      }
    );
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.container}>
        <SearchIcon className={s.icon} />
        <input
          type="text"
          name="search"
          className={s.input}
          placeholder="Type here..."
          onChange={changeState}
        />
        <Button
          classNames="button-primary"
          text="Search"
          isSubmit
          onSubmit={handleSubmit}
        />
      </div>
      <div className={s.filters}>
        <div className={s.filter}>
          Sort by:
          <select
            name="sort"
            id="sort"
            onChange={changeState}
            className={s.select}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className={s.filter}>
          Results by page:
          <select
            name="quantity"
            id="quantity"
            onChange={changeState}
            className={s.select}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>
    </form>
  );
}
