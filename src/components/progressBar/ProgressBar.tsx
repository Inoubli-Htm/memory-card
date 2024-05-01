import React, { FC } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  background-color: #bebebe;
  height: 20px;
  margin: 16px 0;
  border-radius: 10px;
  width: 30%;

  .progress_bar {
    width: 70%;
    height: 20px;
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
  }

  & ._green {
    background-color: green;
  }

  & ._yellow {
    background-color: yellow;
  }

  & ._orange {
    background-color: orange;
  }

  & ._red {
    background-color: red;
  }
`;

interface ProgressBarProps {
  percentGameComplete: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ percentGameComplete }) => {
  const getProgressBarColor = () =>
    percentGameComplete >= 70
      ? "_green"
      : percentGameComplete >= 40
      ? "_orange"
      : percentGameComplete >= 20
      ? "_yellow"
      : "_red";

  return (
    <ProgressBarContainer>
      <div
        className={`progress_bar ${getProgressBarColor()}`}
        style={{ width: `${percentGameComplete}%` }}
        data-testid="progress_bar"
      ></div>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
