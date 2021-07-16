import React, { Component } from "react";
import classes from './App.module.css';
import Layout from "./hoc/Layout/Layout";
import GuessMyNumber from "./containers/GuessMyNumber/GuessMyNumber";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <GuessMyNumber />
        </Layout>
      </div>
    );
  }
}

export default App;