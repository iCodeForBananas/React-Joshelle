// @flow
import React, { Component } from "react";
import "./App.css";
import Song from "./components/Song";
import Images from "./components/Images";
import JoshelleText from "./components/JoshelleText";

type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <Images />
        <Song />
        <JoshelleText />
      </div>
    );
  }
}

export default App;
