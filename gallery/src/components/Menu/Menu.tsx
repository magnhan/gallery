import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="Menu">
      <ul className="Header_Menu">
        <li>
          <NavLink to="/">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/Theme1">Tropical</NavLink>
        </li>
        <li>
          <NavLink to="/Theme2">Disco</NavLink>
        </li>
        <li>
          <NavLink to="/Theme3">Royal</NavLink>
        </li>
        <li>
          <NavLink to="/Favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
}
