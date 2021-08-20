import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Error404 } from "../pages/Error404";

test("error page renders correctly", () => {
  const { asFragment } = render(<Error404 />);
  expect(asFragment()).toMatchSnapshot();
});
