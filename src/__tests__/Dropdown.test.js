import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "../components/Dropdown";

describe("Dropdown", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Dropdown data={["mock arr", "mock arr"]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
