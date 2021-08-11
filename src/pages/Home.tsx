import { useEffect, useState } from "react";
import { getBooks } from "../api/book-search";
import { BookCard } from "../components/BookCard/BookCard";
import { Loading } from "../components/Loading/Loading";
import { Pagination } from "../components/Pagination/Pagination";
import { Search } from "../components/Search/Search";
import { IBook } from "../interfaces/IBook";
import { ISearch } from "../interfaces/ISearch";
import { calcStartIndex } from "../shared/calcStartIndex";
import { calculatePages } from "../shared/calculatePages";

export function Home() {
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
    ).then((bookshelf) => {
      setLoading(false);
      setBooks(bookshelf.items);
      setPages(calculatePages(bookshelf.totalItems, searchState.quantity));
    });
  }, [currentPage, searchState]);

  return (
    <div>
      <Search setSearchState={setSearchState} />
      <main>
        {isLoading && <Loading />}
        {!isLoading &&
          !books &&
          "Books have not been found, try with another query"}
        {!isLoading &&
          books &&
          books.map((book) => <BookCard key={book.id} book={book} />)}
      </main>
      <Pagination
        currentPage={currentPage}
        pages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
