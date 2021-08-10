import { NavLink } from "react-router-dom";
import s from "./Header.css";

export function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink className={s.item} activeClassName={s.active} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={s.item}
              activeClassName={s.active}
              exact
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
