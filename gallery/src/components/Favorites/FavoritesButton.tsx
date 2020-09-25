import React from "react";
import { NavLink } from "react-router-dom";
import "./FavoritesButton.css";

export default function FavoritesButton() {
  return (
    <div>
      <NavLink to="/Favorites">
        <div className="click">
          {" "}
          <span className="fa fa-star-o"></span>
        </div>
      </NavLink>
    </div>
  );
}
