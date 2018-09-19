import React from "react";
import "./PlayButton.css";

type Props = {
  onClick: () => void
};

const PlayButton = function({ onClick }: Props) {
  return (
    <button type="button" className="btn btn-danger btn-lg btn3d" onClick={onClick}>
      Start Joshelleing!
    </button>
  );
};

export default PlayButton;
