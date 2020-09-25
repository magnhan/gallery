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
          <NavLink to="/Theme1">Theme1</NavLink>
        </li>
        <li>
          <NavLink to="/Theme2">Theme2</NavLink>
        </li>
        <li>
          <NavLink to="/Theme3">Theme3</NavLink>
        </li>
        <li>
          <NavLink to="/Favorites">Favorites</NavLink>
        </li>
      </ul>
    </div>
  );
}
