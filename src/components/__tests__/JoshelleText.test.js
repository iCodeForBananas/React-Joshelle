import React from "react";
import JoshelleText from "../JoshelleText";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<JoshelleText />).toJSON();
  expect(tree).toMatchSnapshot();
});
