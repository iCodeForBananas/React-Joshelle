// @flow
import React from "react";
import "./VideoPlayer.css";

const VideoPlayer = function() {
  return (
    <div className="VideoPlayer-spin VideoPlayer-container">
      <div className="VideoPlayer-tv" />
      <iframe
        className="VideoPlayer-iframe"
        width="400"
        height="300"
        src="https://www.youtube.com/embed/eh7lp9umG2I?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=true&amp;start=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />
    </div>
  );
};

export default VideoPlayer;
