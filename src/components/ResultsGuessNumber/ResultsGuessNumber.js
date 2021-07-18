import React from "react";
import classes from "./ResultsGuessNumber.module.css";

const ResultsGuessNumber = (props) => {
  const resultsCount = Object.keys(props.counterAttempts).reduce(
    (total, key) => {
      if (
        props.counterAttempts[key] === "greater" ||
        props.counterAttempts[key] === "less" ||
        props.counterAttempts[key] === "wellDone"
      ) {
        total++;
      }
      return total;
    },
    0
  );

  return (
    <div className={classes.ResultsGuessNumber}>
      {Number(props.myNumber) < props.randomNumber ? (
        <p>My number is greater than {props.myNumber}</p>
      ) : null}
      {Number(props.myNumber) > props.randomNumber ? (
        <p>My number is less than {props.myNumber}</p>
      ) : null}
      {Number(props.myNumber) === props.randomNumber ? (
        <p>
          Well Done! It took you {resultsCount} attempts to guess this number
        </p>
      ) : null}
    </div>
  );
};

export default ResultsGuessNumber;
