import React from "react";
import ReactDOM from "react-dom";
import Search from "../components/Search";
import { shallow } from "enzyme";
import "../testSetup";

describe("Search", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Search id="mock location" type="mock text" handleChange={() => null} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
