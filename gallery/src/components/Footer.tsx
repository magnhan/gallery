import React, { useContext } from "react";
import ThemeContex from "./ThemeContex";


export default function Footer() {
  const theme = useContext(ThemeContex);
  return <div className="Footer" style={theme}>Footer</div>;
}
