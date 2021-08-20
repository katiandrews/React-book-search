import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { About } from "../pages/About/About";

test("about page renders correctly", () => {
  render(<About />);
  const heading = screen.getByText(/About the/i);
  const description = screen.getByText(
    /This project is using Google Books API/i
  );
  expect(heading).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
