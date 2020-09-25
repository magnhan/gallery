import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="Menu">
      <ul className="Header_Menu">
        <li>
          <NavLink to="/Theme1">
            <button className="btn">Tropical</button>
          </NavLink>
        </li>
        <li id="Disco">
          <NavLink to="/Theme2">
            <button className="btn">Disco</button>
          </NavLink>
        </li>
        <li id="Royal">
          <NavLink to="/Theme3">
            <button className="btn">Royal</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Favorites">
            <button className="btn">Favorites</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
