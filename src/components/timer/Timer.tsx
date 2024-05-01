import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameStart, decrementTimer } from "../../redux/cards/cardsSlice";
import { RootState } from "../../redux/rootReducers";
import styled from "styled-components";

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h3,
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  }
`;

const Timer: FC<{ GameStatus: string }> = ({ GameStatus }) => {
  const dispatch = useDispatch();
  const { chrono, isStartedGame } = useSelector(
    (state: RootState) => state.cards
  );

  useEffect(() => {
    const handleTimer = () => {
      if (isStartedGame && chrono === 0) {
        dispatch(setGameStart(0));
      }

      if (isStartedGame && chrono > 0) {
        const intervalId = setTimeout(() => {
          dispatch(decrementTimer());
        }, 1000);

        // Stop the timer if GameStatus is "win"
        if (GameStatus === "win") {
          clearInterval(intervalId);
        }
      }
    };

    const intervalId = setInterval(handleTimer, 1000);
    return () => clearInterval(intervalId);
  }, [chrono, isStartedGame, GameStatus, dispatch]);

  return (
    <TimerWrapper>
      <h3>Remaining time:</h3>
      <p>{chrono} s</p>
    </TimerWrapper>
  );
};

export default Timer;
