import React from "react";
import "./SVG5.css";
import "./../svg.css";

export default function SVG5(props: any) {
  return (
    <div className="SVG SVG5">
      <svg className="SVG_picture"></svg>
      <p className="text">{props.poem}</p>
    </div>
  );
}
