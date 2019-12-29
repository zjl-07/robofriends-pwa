import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("Expect to render a CounterButton Component", () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it("Expect to increase 1 count when click the button", () => {
  const wrapper = shallow(<CounterButton />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
});
