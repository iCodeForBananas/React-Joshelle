import React from "react";
import MainImage from "../MainImage";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<MainImage />).toJSON();
  expect(tree).toMatchSnapshot();
});
