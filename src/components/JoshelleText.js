// @flow
import React from "react";
import "./JoshelleText.css";

type Props = {};

type State = {
  seconds: number
};

class JoshelleText extends React.Component<Props, State> {
  state = {
    seconds: 0
  };

  componentDidMount() {
    this.incrementSeconds();
  }

  incrementSeconds() {
    this.setState(
      {
        seconds: this.state.seconds + 1
      },
      () => {
        setTimeout(() => {
          this.incrementSeconds();
        }, 1000);
      }
    );
  }

  render() {
    var chars = `You have been Joshelleing for ${this.state.seconds} seconds!`.split("");

    return (
      <span className="wavetext">
        {chars.map((char, index) => (
          <span key={char + index}>{char}</span>
        ))}
      </span>
    );
  }
}

export default JoshelleText;
