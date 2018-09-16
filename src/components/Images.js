// @flow
import React from "react";
import "./Images.css";
import Image from "./Image";
import sample from "lodash/sample";
import range from "lodash/range";

type Props = {};

type State = {
  currentImages: {
    left: number,
    top: number,
    src: string
  }[]
};

class Images extends React.Component<Props, State> {
  images: Array<number> = range(1, 33);

  state = {
    currentImages: []
  };

  componentDidMount() {
    this.updateImages();
  }

  randomIntFromInterval(min: number = 0, max: number = 90): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  updateImages() {
    this.setState(
      {
        currentImages: [
          {
            top: this.randomIntFromInterval(),
            left: this.randomIntFromInterval(),
            src: sample(this.images)
          }
        ]
      },
      () => {
        setTimeout(() => this.updateImages(), 5000);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.currentImages.map(image => {
          const src = "/images/" + image.src + ".gif";
          return <Image top={image.top} left={image.left} key={src} src={src} />;
        })}
      </React.Fragment>
    );
  }
}

export default Images;
