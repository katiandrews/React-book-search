import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { App } from "../App";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import userEvent from "@testing-library/user-event";

test("renders home page", async () => {
  const history = createMemoryHistory();
  await act(async () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  expect(screen.getByText(/Search for/i)).toBeInTheDocument();
});

test("navigate to about page", async () => {
  const history = createMemoryHistory();
  await act(async () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  userEvent.click(screen.getByText("About"));
  expect(screen.getByText(/About the project/i)).toBeInTheDocument();
});

test("navigate to error page if route is wrong", async () => {
  const history = createMemoryHistory();
  history.push("wrong-route");
  await act(async () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });
  expect(screen.getByAltText(/page not found/i)).toBeInTheDocument();
});
