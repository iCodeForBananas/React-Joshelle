// @flow
import React from "react";
import "./VideoPlayer.css";

class VideoPlayer extends React.Component {
  componentDidMount() {
    document.getElementById("VideoPlayer-video").play();
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
