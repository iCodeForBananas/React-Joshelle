// @flow
import React from "react";
import "./Images.css";
import Image from "./Image";
import sampleSize from "lodash/sampleSize";
import range from "lodash/range";

type Props = {};

type State = {
  currentImages: {
    left: number,
    top: number,
    src: number
  }[]
};

class Images extends React.Component<Props, State> {
  images: Array<number> = range(1, 60);

  state = {
    currentImages: []
  };

  componentDidMount() {
    this.updateImages();
  }

  randomIntFromInterval(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  updateImages() {
    const images = sampleSize(this.images, 10);

    this.setState(
      {
        currentImages: images.map((image: number) => ({
          top: Math.max(0, this.randomIntFromInterval(0, window.innerHeight) - 200),
          left: Math.max(0, this.randomIntFromInterval(0, window.innerWidth) - 200),
          src: image
        }))
      },
      () => {
        setTimeout(() => this.updateImages(), 3450);
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
