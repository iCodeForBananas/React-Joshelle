import React from "react";
import PlayButton from "../PlayButton";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<PlayButton onClick={() => null} />).toJSON();
  expect(tree).toMatchSnapshot();
});
