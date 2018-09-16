// @flow
import React from "react";
import "./Song.css";

const Song = function() {
  return <audio className="Song-audio" src="/song.mp3" controls={false} loop={true} autoPlay={true} />;
};

export default Song;
