import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

it("Expect to render a SearchBox Component", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
