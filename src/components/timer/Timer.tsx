// Timer.tsx
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGameStart, decrementTimer } from "../../redux/cards/cardsSlice";
import { RootState } from "../../redux/rootReducers";
import styles from "./Timer.module.scss";

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
    <div className={styles.timer}>
      <h3>Remaining time:</h3>
      <p>{chrono} s</p>
    </div>
  );
};

export default Timer;
