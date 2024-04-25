import React from "react";
import { render } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar component", () => {
  it("renders with given percentGameComplete", () => {
    const percentGameComplete: number = 50;
    const { getByTestId } = render(
      <ProgressBar percentGameComplete={percentGameComplete} />
    );
    const progressBar = getByTestId("progress_bar");
    expect(progressBar).toHaveStyle("width: 50%");
  });

  it("renders with green color if percentGameComplete is greater than or equal to 70", () => {
    const percentGameComplete: number = 80;
    const { getByTestId } = render(
      <ProgressBar percentGameComplete={percentGameComplete} />
    );
    const progressBar = getByTestId("progress_bar");
    expect(progressBar).toHaveClass("_green");
  });

  it("renders with orange color if percentGameComplete is greater than or equal to 40", () => {
    const percentGameComplete: number = 50;
    const { getByTestId } = render(
      <ProgressBar percentGameComplete={percentGameComplete} />
    );
    const progressBar = getByTestId("progress_bar");
    expect(progressBar).toHaveClass("_orange");
  });

  it("renders with yellow color if percentGameComplete is greater than or equal to 20", () => {
    const percentGameComplete: number = 30;
    const { getByTestId } = render(
      <ProgressBar percentGameComplete={percentGameComplete} />
    );
    const progressBar = getByTestId("progress_bar");
    expect(progressBar).toHaveClass("_yellow");
  });

  it("renders with red color if percentGameComplete is less than 20", () => {
    const percentGameComplete: number = 10;
    const { getByTestId } = render(
      <ProgressBar percentGameComplete={percentGameComplete} />
    );
    const progressBar = getByTestId("progress_bar");
    expect(progressBar).toHaveClass("_red");
  });
});
