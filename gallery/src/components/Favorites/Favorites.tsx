import React from "react";
import "../paintings/svg.css";
import DisplayArt from "./../DisplayArt";
import "../../App.css"

export default function Favorites() {
  return (
    <div className="Favorites">
      <p id="pageHeader"> Locally stored images</p>
      <DisplayArt page={"favorites"} />
    </div>
  );
}
