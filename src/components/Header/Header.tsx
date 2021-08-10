import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Header.css";

export function Header() {
  const [activeRoute, setActiveRoute] = useState("home");

  return (
    <header className={s.header}>
      <nav>
        <ul className={s.nav}>
          <li
            onClick={() => {
              setActiveRoute("home");
            }}
          >
            <Link
              className={`${s.item} ${activeRoute === "home" ? s.active : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              setActiveRoute("about");
            }}
          >
            <Link
              className={`${s.item} ${activeRoute === "about" ? s.active : ""}`}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
