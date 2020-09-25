import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <NavLink to="/Theme1">
        <h1 id="Heading">Gallery</h1>
      </NavLink>
    </div>
  );
}
