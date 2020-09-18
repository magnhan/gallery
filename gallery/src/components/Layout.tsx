import React from "react";
import DisplayArt from "./DisplayArt";

export default function Layout() {
  return (
    <div className="grid-container">
      <div className="Header">Header</div>
      <div className="Menu">Menu</div>
      <DisplayArt />
      <div className="Footer">Footer</div>
    </div>
  );
}
