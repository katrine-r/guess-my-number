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
      
      {resultsCount}
      
      {/* <p>My number is greater than</p>
      <p>My number is less than</p>
      <p>Well Done! It took you {resultsCount} attempts to guess this number</p> */}
    </div>
  );
};

export default ResultsGuessNumber;
