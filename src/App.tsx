import React, { useEffect, useState } from "react";
import { getBooks } from "./api/book-search";
import { BookCard } from "./components/BookCard/BookCard";
import { Loading } from "./components/Loading/Loading";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";
import { IBook } from "./interfaces/IBook";
import { ISearch } from "./interfaces/ISearch";
import { calcStartIndex } from "./shared/calcStartIndex";
import { calculatePages } from "./shared/calculatePages";
import "./style.css";

export const App = () => {
  const [books, setBooks] = useState<IBook[] | null>(null);
  const [searchState, setSearchState] = useState<ISearch>({
    search: "Harry Potter",
    sort: "relevance",
    quantity: 10,
  });
  const [isLoading, setLoading] = useState(true);
  const [totalPages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    const startIndex = calcStartIndex(currentPage, searchState.quantity);
    getBooks(
      searchState.search,
      searchState.sort,
      searchState.quantity,
      startIndex
    ).then((books) => {
      setLoading(false);
      setBooks(books.items);
      setPages(calculatePages(books.totalItems, searchState.quantity));
    });
  }, [currentPage]);

  return (
    <>
      <header className="header">
        <h1>Search for Books</h1>
        <Search
          setBooks={setBooks}
          setLoading={setLoading}
          setSearchState={setSearchState}
          searchState={searchState}
          setPages={setPages}
        />
      </header>
      <main>
        {isLoading ? (
          <Loading />
        ) : books ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          "Books have not been found, try with another query"
        )}
      </main>
      <Pagination
        currentPage={currentPage}
        pages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
