import React from "react";
import Image from "../Image";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Image src="IMAGE_PATH_HERE" top="100" left="100" />).toJSON();
  expect(tree).toMatchSnapshot();
});
