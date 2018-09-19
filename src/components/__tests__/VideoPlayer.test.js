import React from "react";
import VideoPlayer from "../VideoPlayer";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<VideoPlayer />).toJSON();
  expect(tree).toMatchSnapshot();
});
