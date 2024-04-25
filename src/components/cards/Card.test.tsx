import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Cards";
import { Card as CardType } from "../../types/cards";

describe("Card component", () => {
  const sampleCard: CardType = {
    id: 1,
    symbolPath: "sample-symbol-path",
    cardBack: "sample-card-back",
    isFlipped: false,
    isMatched: false,
  };

  it("renders correctly", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card
        index={0}
        card={sampleCard}
        isFlipped={false}
        isMatched={false}
        matchedCardIndexes={[]}
        flippedCardIndexes={[]}
        handleClick={handleClick}
      />
    );

    expect(getByTestId("card")).toBeInTheDocument();
  });

  it("calls handleClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Card
        index={0}
        card={sampleCard}
        isFlipped={false}
        isMatched={false}
        matchedCardIndexes={[]}
        flippedCardIndexes={[]}
        handleClick={handleClick}
      />
    );

    const card = getByTestId("card");
    fireEvent.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
