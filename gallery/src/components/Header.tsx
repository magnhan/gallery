import React from "react";
import { NavLink } from "react-router-dom";
import ThemeContext, { themes } from "./ThemeContext";

export default function Header() {
  const {theme} = React.useContext(ThemeContext);
  return (
    <div className="Header">
      <h1 id="Heading">
        <NavLink to="/" style={{color: theme.dark}}>Gallery</NavLink>
      </h1>
    </div>
  );
}
