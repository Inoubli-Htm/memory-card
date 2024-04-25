import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal component", () => {
  it("renders correctly with win message", () => {
    const onClose = jest.fn();
    const { getByTestId, getByText } = render(
      <Modal message="You Win! Congratulations!" onClose={onClose} />
    );

    expect(getByTestId("modal")).toBeInTheDocument();
    expect(getByText("You Win! Congratulations!")).toBeInTheDocument();
  });

  it("renders correctly with lose message", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal message="You Lose! Better luck next time!" onClose={onClose} />
    );

    expect(getByText("You Lose! Better luck next time!")).toBeInTheDocument();
  });

  it("calls onClose function when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal message="Test message" onClose={onClose} />
    );

    const closeButton = getByText("Close");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
