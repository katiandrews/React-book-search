import { Link } from "react-router-dom";
import s from "./Header.css";

export function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.nav}>
          <li>
            <Link className={s.item} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={s.item} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
