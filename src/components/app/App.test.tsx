import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(<App />);

    expect(getByTestId("app")).toBeInTheDocument();
    expect(getByTestId("board-title")).toHaveTextContent("Test Memory OOSTAOO");
  });
});
