import React from "react";
import App from "./App";
import FavoritesButton from "./components/Favorites/FavoritesButton";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

//snapshot test for favorite button
test("First snapshottest", () => {
  const component = renderer.create(<FavoritesButton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

//smoke test for components
test("Renders without crashing", () => {
  const smokeTest = document.createElement("smokeTest");
  ReactDOM.render(<App />, smokeTest);
});
