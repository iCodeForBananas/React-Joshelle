// @flow
import React, { Component } from "react";
import "./App.css";
import Song from "./components/Song";
import Images from "./components/Images";
import JoshelleText from "./components/JoshelleText";
import VideoPlayer from "./components/VideoPlayer";

type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <VideoPlayer />
        <Images />
        <JoshelleText />
      </div>
    );
  }
}

export default App;
