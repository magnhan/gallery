import React from "react";
import { NavLink } from "react-router-dom";
import ThemeContext, { themes } from "./ThemeContext";

export default function Header() {
  const {theme, tropicalThemeToggle,discoThemeToggle,royalThemeToggle} = React.useContext(ThemeContext);
  return (
    <div className="Header">
      <h1 id="Heading"
      style={{color: theme.background}}>
        <NavLink to="/">Gallery</NavLink>
      </h1>
    </div>
  );
}
