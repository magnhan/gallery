import React from "react";
import DisplayArt from "./DisplayArt";

export default function Favorites() {
  //Saves currently favorited installations to local storage with key "favorites" upon button click
  return (
    <div>
      <DisplayArt page={"all"}/>
    </div>
  );
}
