import React from "react";
import Poetry from './Poetry'

export default function DisplayArt() {
  return (
    <div className="DisplayArt">
      <div className="SVG 1">
        <svg className="SVG_picture"></svg>
        <Poetry/>
      </div>

      <div className="SVG 2">
        <svg className="SVG_picture"></svg>
        <p className="text"> Bilde 2</p>
      </div>

      <div className="SVG 3">
        <svg className="SVG_picture"></svg>
        <p className="text"> Bilde 3</p>
      </div>

      <div className="SVG 4">
        <svg className="SVG_picture"></svg>
        <p className="text"> Bilde 4</p>
      </div>

      <div className="SVG 5">
        <svg className="SVG_picture"></svg>
        <p className="text"> Bilde 5</p>
      </div>

      <div className="SVG 6">
        <svg className="SVG_picture"></svg>
        <p className="text"> Bilde 6</p>
      </div>
    </div>
  );
}
