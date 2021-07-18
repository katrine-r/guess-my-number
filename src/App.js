import React from "react";
import classes from './App.module.css';
import Layout from './hoc/Layout/Layout'
import GuessMyNumber from './containers/GuessMyNumber/GuessMyNumber'

export default function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <GuessMyNumber />
      </Layout>
    </div>
  );
}