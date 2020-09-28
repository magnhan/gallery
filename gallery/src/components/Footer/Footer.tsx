import React from "react";
import ThemeContext from "../ThemeContext";
import './Footer.css'

export default function Footer() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className="Footer" style={{ backgroundColor: theme.footer }}>
      <p id = "FooterText">This project was made by students in the course IT2810.</p>
    </div>
  );
}
