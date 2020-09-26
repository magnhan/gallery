import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <h1 id="Heading">
        <NavLink to="/">Gallery </NavLink>
      </h1>
    </div>
  );
}
