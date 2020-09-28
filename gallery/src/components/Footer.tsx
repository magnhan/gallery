import React from "react";
import ThemeContext from "./ThemeContext";


export default function Footer() {
  const {theme} = React.useContext(ThemeContext);
  return  <div className="Footer" style={{background: theme.footer}}>
              Footer
          </div>;
}
