import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("Expect to render a CardList Component", () => {
  const mockRobots = [
    {
      id: "1",
      name: "Emilda",
      email: "Emilda@gmail.com"
    }
  ];

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
