// @flow
import React from "react";
import "./VideoPlayer.css";

type Props = {};
type State = {};

class VideoPlayer extends React.Component<Props, State> {
  componentDidMount() {
    const videoPlayerEl: HTMLVideoElement = document.getElementById("VideoPlayer-video");
    videoPlayerEl && videoPlayerEl.play();
  }

  render() {
    return (
      <div className="VideoPlayer-spin VideoPlayer-container">
        <div className="VideoPlayer-tv" />
        <video
          id="VideoPlayer-video"
          autoPlay={true}
          width="400"
          height="300"
          className="VideoPlayer-iframe"
          loop={true}
        >
          <source src="/heyheyhey.mp4" />
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
