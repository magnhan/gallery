import React from "react";

import "./display-art.css";
import Installation from "./paintings/Installation";

export default function DisplayArt() {
  return (
    <div className="DisplayArt">
      <Installation image={1} poem={"yeet"}/>
    </div>
  );
}
