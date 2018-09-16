// @flow
import React from "react";
import "./Image.css";

type Props = {
  src: string,
  top: number,
  left: number
};

const Image = function({ src, left, top }: Props) {
  return <img style={{ marginLeft: left + "px", marginTop: top + "px" }} className="Image-img" src={src} alt="" />;
};

export default Image;
