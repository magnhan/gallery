import React from "react";
import ThemeContext from "./ThemeContext";


export default function Footer() {
  const {theme} = React.useContext(ThemeContext);
  return  <div className="Footer" style={{backgroundColor: theme.footer}}>
              Footer
          </div>;
}
