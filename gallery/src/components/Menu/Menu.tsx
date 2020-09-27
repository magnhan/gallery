import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContex from "../ThemeContex";
import "./Menu.css";

export default function Menu(props: any) {
const theme = useContext(ThemeContex);

  return (
    <div className="Menu" style={theme}>
      <ul className="Header_Menu">
        <li>
          <NavLink to="/Theme1">
            <button id="Tropical" className="btn" onClick={props.changeTheme}>
              Tropical
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Theme2">
            <button id="Disco" className="btn" onClick={props.changeTheme}>
              Disco
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/Theme3">
            <button id="Royal" className="btn" onClick={props.changeTheme}>
              Royal
            </button>
          </NavLink>
        </li>
      </ul>
    </div>
    
  );
}
