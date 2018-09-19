// @flow
import React, { Component } from "react";
import "./App.css";
import Images from "./components/Images";
import JoshelleText from "./components/JoshelleText";
import VideoPlayer from "./components/VideoPlayer";
import MainImage from "./components/MainImage";
import PlayButton from "./components/PlayButton";

type Props = {};
type State = {
  hasInteractedWithSite: boolean
};

class App extends Component<Props, State> {
  state = {
    hasInteractedWithSite: false
  };

  handlePlayClick = () => {
    this.setState({
      hasInteractedWithSite: true
    });
  };

  render() {
    if (!this.state.hasInteractedWithSite) {
      return <PlayButton onClick={this.handlePlayClick} />;
    }

    return (
      <div className="App">
        <VideoPlayer />
        <Images />
        <MainImage />
        <JoshelleText />
      </div>
    );
  }
}

export default App;
