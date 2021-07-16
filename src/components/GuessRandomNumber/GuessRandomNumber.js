import React from "react";
import classes from "./GuessRandomNumber.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const GuessRandomNumber = (props) => {
  return (
    <div className={classes.GuessRandomNumber}>
      <h3>Guess of numbers</h3>

      <Input
        label={props.label}
        value={props.value}
        type={props.type}
        valid={props.valid}
        touched={props.touched}
        shouldValidate={!!props.validation}
        errorMessage={props.errorMessage}
        onChange={props.onChange}
      />

      <Button onClick={props.onClick}>Guess</Button>
    </div>
  );
};

export default GuessRandomNumber;
