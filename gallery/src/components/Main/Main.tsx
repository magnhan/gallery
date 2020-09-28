import React from "react";
import DisplayArt from "../DisplayArt";
import "./Main.css";

export default function Main() {
  function savePermanently() {
    localStorage.setItem(
      "favorites",
      sessionStorage.getItem("favorites") || "[]"
    );
    console.log(localStorage.getItem("favorites"));
  }
  return (
    <div>
      <DisplayArt page={"all"} />
      <button id="SaveOnMain" onClick={savePermanently}>
        Click here to save your favorites for next time
      </button>
    </div>
  );
}
