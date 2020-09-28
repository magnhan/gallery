import React from "react";
import "../paintings/svg.css";
import DisplayArt from "./../DisplayArt";
import "../../App.css"

export default function Favorites() {
  function savePermanently(){
    localStorage.setItem("favorites", sessionStorage.getItem("favorites") || "[]")
    console.log(localStorage.getItem("favorites"));
  }
  return (
    <div className="Favorites">
      <p onClick={savePermanently}>Click here to save your favorites for next time</p>
      <DisplayArt page={"favorites"}/>
    </div>
  );
}
