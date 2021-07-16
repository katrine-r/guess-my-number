import React, { Component } from "react";
import classes from "./GuessMyNumber.module.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import validator from "validator";
import GuessRandomNumber from "../../components/GuessRandomNumber/GuessRandomNumber";
import ResultsGuessNumber from "../../components/ResultsGuessNumber/ResultsGuessNumber";

function getRandomNumberMinMax(min, max) {
  if (min < max) {
    const rangeRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("control - " + rangeRandomNumber);
    return rangeRandomNumber;
  } else {
    console.log("Enter correct value");
  }
}

class GuessMyNumber extends Component {
  state = {
    min: 0,
    max: 100,
    rangeRandomNumber: 0,
    clickRandomNumber: false,
    clickGuessMyNumber: false,
    counterAttempts: [],
    isFormValid: false,
    formControls: {
      fromNumber: {
        type: "number",
        label: "From",
        value: 0,
        errorMessage: "Enter correct value",
        valid: false,
        touched: false,
        validation: {
          required: true,
          fromNumber: true
        }
      }, // end fromNumber
      toNumber: {
        type: "number",
        label: "To",
        value: 100,
        errorMessage: "Enter correct value",
        valid: false,
        touched: false,
        validation: {
          required: true,
          fromNumber: true
        }
      } // end toNumber
    }, // end formControls
    guessNumber: {
      type: "number",
      label: "",
      value: 100,
      errorMessage: "Enter correct value",
      valid: false,
      touched: false,
      validation: {
        required: true,
        fromNumber: true
      }
    }
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          label={control.label}
          value={control.value}
          type={control.type}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.changeNumberHandler(controlName, event)}
        />
      );
    });
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.fromNumber) {
      isValid =
        value >= 0 &&
        validator.isInt(value) &&
        validator.isNumeric(value) &&
        isValid;
    }
    if (validation.toNumber) {
      isValid =
        value >= 1 &&
        validator.isInt(value) &&
        validator.isNumeric(value) &&
        isValid;
    }

    return isValid;
  }

  changeNumberHandler(controlName, event) {
    console.log(`${controlName} - ` + event.target.value);

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid
    });
  }

  clickRandomNumberHandler = () => {
    const min = this.state.formControls.fromNumber.value;
    const max = this.state.formControls.toNumber.value;
    console.log("min - ", min);
    console.log("max - ", max);
    const rangeRandomNumber = getRandomNumberMinMax(Number(min), Number(max));

    this.setState({
      clickRandomNumber: true,
      min,
      max,
      rangeRandomNumber
    });
  };

  changeGuessMyNumberHandler = (event) => {
    console.log("guess number - " + event.target.value);
    const guessNumber = { ...this.state.guessNumber };
    guessNumber.value = event.target.value;
    guessNumber.touched = true;
    this.setState({
      guessNumber
    });
  };

  clickGuessMyNumberHandler = () => {
    const myNumber = this.state.guessNumber.value;
    console.log("my number - ", myNumber);
    const randomNumber = this.state.rangeRandomNumber;
    console.log("random number - ", randomNumber);

    const counterAttempts = this.state.counterAttempts;

    if (Number(myNumber) < randomNumber) {
      console.log(`My number is greater than ${myNumber}`);
      counterAttempts.push("greater");
    }

    if (Number(myNumber) > randomNumber) {
      console.log(`My number is less than ${myNumber}`);
      counterAttempts.push("less");
    }

    if (Number(myNumber) === randomNumber) {
      console.log("Well Done! It took you [...] attempts to guess this number");
      counterAttempts.push("wellDone");
    }

    this.setState({
      clickGuessMyNumber: true,
      counterAttempts
    });
    console.log(counterAttempts);
  };

  render() {
    return (
      <div className={classes.GuessMyNumber}>
        <div>
          <h1>Guess My Number</h1>
          <form
            onSubmit={this.submitHandler}
            className={classes.GuessNumberForm}
          >
            <h3>Range of numbers</h3>
            {this.renderInputs()}
            <Button onClick={this.clickRandomNumberHandler}>Start</Button>
            {this.state.clickRandomNumber ? (
              <GuessRandomNumber
                onChange={(event) => this.changeGuessMyNumberHandler(event)}
                onClick={this.clickGuessMyNumberHandler}
                state={this.state.guessNumber}
              />
            ) : null}
            {this.state.clickGuessMyNumber ? (
              <ResultsGuessNumber
                myNumber={this.state.guessNumber.value}
                randomNumber={this.state.rangeRandomNumber}
                counterAttempts={this.state.counterAttempts}
              />
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default GuessMyNumber;
