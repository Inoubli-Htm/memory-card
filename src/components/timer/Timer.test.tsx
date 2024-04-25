import React from "react";
import { render, act } from "@testing-library/react";
import Timer from "./Timer";
import { Provider } from "react-redux";
import store from "../../redux/store"; // Import your Redux store
import { setGameStart } from "../../redux/cards/cardsSlice";

jest.useFakeTimers(); // Mock timers

describe("Timer component", () => {
  it("renders with initial state", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Timer GameStatus="win" />
      </Provider>
    );
    expect(getByText(/Remaining time:/i)).toBeInTheDocument();
    expect(getByText(/0 s/i)).toBeInTheDocument(); // Assuming initial state is 0 seconds
  });

  it("updates timer correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Timer GameStatus="win" />
      </Provider>
    );

    // Dispatch action to start the game
    act(() => {
      store.dispatch(setGameStart(60)); // Assuming the game starts with 60 seconds
    });

    expect(getByText(/60 s/i)).toBeInTheDocument();

    // Fast-forward timer by 1 second
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(getByText(/59 s/i)).toBeInTheDocument(); // Timer should decrement by 1 second

    // Fast-forward timer by 10 seconds
    act(() => {
      jest.advanceTimersByTime(10000);
    });

    expect(getByText(/49 s/i)).toBeInTheDocument(); // Timer should decrement by 10 seconds
  });
});
