import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="Menu">
      <ul className="Header_Menu">
        <li>
          <NavLink to="/Theme1">
            <button id="Tropical" className="btn">
              Tropical
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Theme2">
            <button id="Disco" className="btn">
              Disco
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Theme3">
            <button id="Royal" className="btn">
              Royal
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
