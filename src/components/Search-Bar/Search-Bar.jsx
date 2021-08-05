import "./Search-Bar.scss";
import { Button } from "../../shared/Button/Button";
import SearchIcon from "../../assets/search.svg";

export function SearchBar() {
  return (
    <label htmlFor="site-search" className="search-label">
      What are you interested in today?
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input
          type="search"
          id="site-search"
          name="search"
          className="search-input"
          placeholder="Type here..."
        />
        <Button classNames="button-primary" text="Search" />
      </div>
    </label>
  );
}
