import React from "react";
import Images from "../Images";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Images />).toJSON();
  expect(tree).toMatchSnapshot();
});
