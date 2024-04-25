import React, { FC } from "react";
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  percentGameComplete: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentGameComplete }) => {
  const getProgressBarColor = () =>
    percentGameComplete >= 70
      ? styles._green
      : percentGameComplete >= 40
      ? styles._orange
      : percentGameComplete >= 20
      ? styles._yellow
      : styles._red;

  return (
    <div className={styles.progress_bar_container}>
      <div
        className={`${styles.progress_bar} ${getProgressBarColor()}`}
        style={{ width: `${percentGameComplete}%` }}
        data-testid="progress_bar"
      ></div>
    </div>
  );
};

export default ProgressBar;
