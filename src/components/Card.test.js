import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";

it("Expect to render a Card Component", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
