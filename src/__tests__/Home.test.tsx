import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Home } from "../pages/Home";
import { store } from "../redux/store";
import userEvent from "@testing-library/user-event";

test("Renders Home correctly", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
  const searchInput = screen.getByPlaceholderText(/Type here/i);

  expect(searchInput).toBeInTheDocument();
  expect(searchInput).toHaveClass("input");
});

test("Selects filters right", async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });
  const [sortSelect, quantitySelect] = screen.getAllByRole("combobox");

  userEvent.selectOptions(sortSelect, "Newest");
  const selectedOption = screen.getByText("Newest") as HTMLOptionElement;
  expect(selectedOption.selected).toBeTruthy();

  userEvent.selectOptions(sortSelect, "Relevance");
  expect(selectedOption.selected).toBeFalsy();

  userEvent.selectOptions(quantitySelect, "10");
  const selectedQuantity = screen.getByText("10") as HTMLOptionElement;
  expect(selectedQuantity.selected).toBeTruthy();
});
