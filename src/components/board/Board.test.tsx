import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Board from "./Board";

describe("Board component", () => {
  it("renders correctly with initial state", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    expect(getByTestId("board")).toBeInTheDocument();
    expect(getByTestId("reset-button")).toBeInTheDocument();
  });

  it("starts game when a card is clicked", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Board />
      </Provider>
    );

    const card = getByTestId("card-0");
    fireEvent.click(card);
  });
});
