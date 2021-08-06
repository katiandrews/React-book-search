import React, { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { Button } from "../Button/Button";
import s from "./Search.css";

export function Search() {
  const [formState, setState] = useState({
    search: "",
    sort: "relevance",
    quantity: 10,
  });

  const changeState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <form className={s.form}>
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