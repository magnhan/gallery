import React from "react";
import { NavLink } from "react-router-dom";
import "./FavoritesButton.css";

export default function FavoritesButton() {
  return (
    <div className= "FavoritesButton">
      <NavLink to="/Favorites">
        <div className="click">
          {"Fav"}
          <span className="fa fa-star-o"></span>
        </div>
      </NavLink>
    </div>
  );
}
