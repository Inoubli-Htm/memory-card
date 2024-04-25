export interface Card {
  id: number;
  symbolPath: string;
  cardBack: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export type CardsState = {
  cards: Card[];
  flipped: number[];
  matched: number[];
};
