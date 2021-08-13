import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../shared/api/book-search";
import { BookCard } from "../components/BookCard/BookCard";
import { Loading } from "../components/Loading/Loading";
import { Pagination } from "../components/Pagination/Pagination";
import { Search } from "../components/Search/Search";
import { IBook } from "../shared/interfaces/IBook";
import { ISearch } from "../shared/interfaces/ISearch";
import { calcStartIndex } from "../shared/calcStartIndex";
import { calculatePages } from "../shared/calculatePages";
import { selectBooks, setBooks } from "../redux/slices/books";

export function Home() {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

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
      dispatch(setBooks(bookshelf.items));
      setPages(calculatePages(bookshelf.totalItems, searchState.quantity));
    });
  }, [currentPage, searchState, dispatch]);

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
          books?.map((book: IBook) => <BookCard key={book.id} book={book} />)}
      </main>
      <Pagination
        currentPage={currentPage}
        pages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
