import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";

it("Expect to render a Scroll Component", () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
});
