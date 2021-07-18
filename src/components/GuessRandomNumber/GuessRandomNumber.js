import React from "react";
import classes from "./GuessRandomNumber.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const GuessRandomNumber = (props) => {
  return (
    <div className={classes.GuessRandomNumber}>
      <h3>Guess of numbers</h3>

      <Input
        label={props.state.label}
        value={props.state.value}
        type={props.state.type}
        valid={props.state.valid}
        touched={props.state.touched}
        shouldValidate={!!props.state.validation}
        errorMessage={props.state.errorMessage}
        onChange={props.onChange}
      />

      <Button onClick={props.onClick}>Guess</Button>
    </div>
  );
};

export default GuessRandomNumber;
