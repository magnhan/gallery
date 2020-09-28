import React from "react";
import App from "./App";
import FavoritesButton from "./components/Favorites/FavoritesButton";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Menu from "./components/Menu/Menu";

//snapshot tester
test("Snapshottest FavoriteButtton", () => {
  const component = renderer.create(<FavoritesButton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Snapshottest Menu", () => {
  const component = renderer.create(<Menu />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//smoke test for components
test("Renders without crashing", () => {
  const smokeTest = document.createElement("smokeTest");
  ReactDOM.render(<App />, smokeTest);
});
