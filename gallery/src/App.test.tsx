import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";

//snapshot test
test("Snapshottest Menu", () => {
  const component = renderer.create(<Menu />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Snapshottest Main", () => {
  const component = renderer.create(<Main />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//smoke test for components
test("Renders without crashing", () => {
  const smokeTest = document.createElement("smokeTest");
  ReactDOM.render(<App />, smokeTest);
});
