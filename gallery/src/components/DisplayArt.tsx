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
        <Poetry/>
      </div>

      <div className="SVG 3">
        <svg className="SVG_picture"></svg>
        <Poetry/>
      </div>

      <div className="SVG 4">
        <svg className="SVG_picture"></svg>
        <Poetry/>
      </div>

      <div className="SVG 5">
        <svg className="SVG_picture"></svg>
        <Poetry/>
      </div>

      <div className="SVG 6">
        <svg className="SVG_picture"></svg>
        <Poetry/>
      </div>
    </div>
  );
}
