import { useEffect, useState } from "react";
import { getBooks } from "./api/book-search";
import { BookCard } from "./components/BookCard/BookCard";
import { Loading } from "./components/Loading/Loading";
import { Search } from "./components/Search/Search";
import { IBook } from "./interfaces/IBook";
import "./style.css";

export const App = () => {
  const [books, setBooks] = useState<IBook[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getBooks("Harry Potter", "relevance", 10).then((books) => {
      setLoading(false);
      setBooks(books);
    });
  }, []);

  return (
    <>
      <header className="header">
        <h1>Search for Books</h1>
        <Search setBooks={setBooks} setLoading={setLoading} />
      </header>
      <main>
        {isLoading && <Loading />}
        {books &&
          books.map((book) => (
            <BookCard key={book.id} title={book.volumeInfo.title} />
          ))}
      </main>
    </>
  );
};
