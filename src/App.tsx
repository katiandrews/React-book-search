import { Search } from "./components/Search/Search";
import "./style.css";

export const App = () => {
  return (
    <>
      <header className="header">
        <h1>Search for Books</h1>
        <Search />
      </header>
      <main>Books</main>
    </>
  );
};
