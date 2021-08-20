import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../components/Header/Header";

test("Header contains correct text", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const homeText = screen.getByText("Home");
  const aboutText = screen.getByText("About");
  expect(homeText).toBeDefined();
  expect(aboutText).toBeDefined();
});
