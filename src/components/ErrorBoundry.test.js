import React from "react";
import { shallow } from "enzyme";
import ErrorBoundry from "./ErrorBoundry";

it("Expect to render a ErrorBoundry Component", () => {
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
});
