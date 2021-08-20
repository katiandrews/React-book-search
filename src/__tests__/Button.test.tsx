import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button/Button";

test("Button renders correctly", () => {
  render(<Button text="Send" classNames="primary" />);

  const button = screen.getByRole("button");

  expect(button).toBeDefined();
  expect(button).toHaveTextContent("Send");
  expect(button).toHaveProperty("type", "button");
});
