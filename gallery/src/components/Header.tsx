import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <NavLink to="/">
        <h1 id="Heading">Gallery</h1>
      </NavLink>
    </div>
  );
}
