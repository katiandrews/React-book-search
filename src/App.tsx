import { useEffect, useState } from "react";
import { BookCard } from "./components/BookCard/BookCard";
import { Search } from "./components/Search/Search";
import "./style.css";

export const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <header className="header">
        <h1>Search for Books</h1>
        <Search setBooks={setBooks} />
      </header>
      <main>
        <BookCard />
      </main>
    </>
  );
};
