import React from "react";
import "./SVG6.css";
import "./../svg.css";

export default function SVG6(props: any) {
  return (
    <div className="SVG SVG6">
      <svg className="SVG_picture"></svg>
      <p className="text">{props.poem}</p>
    </div>
  );
}
