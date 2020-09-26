import React from "react";

import "./display-art.css";
import Installation from "./paintings/Installation";

export default function DisplayArt() {
  return (
    <div className="DisplayArt">
      <Installation image={1} poem={"yeet"} />
      <Installation image={2} poem={"yeet"} />
      <Installation image={3} poem={"yeet"} />
      <Installation image={4} poem={"yeet"} />
      <Installation image={5} poem={"yeet"} />
      <Installation image={6} poem={"yeet"} />
    </div>
  );
}
