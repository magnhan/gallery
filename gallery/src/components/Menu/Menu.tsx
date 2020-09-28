import React from "react";
import ThemeContex from "../ThemeContext";
import "./Menu.css";
import ThemeContext from "../ThemeContext";

export default function Menu(props: any) {
  const {theme} = React.useContext(ThemeContext);
  return (
    <div className="Menu" style={{backgroundColor: theme.menu}}>
      <ul className="Header_Menu">
        <li>
        <ThemeContex.Consumer>
        {({theme, tropicalThemeToggle}) => (
            <button 
            id="Tropical" 
            className="btn" 
            onClick={tropicalThemeToggle} 
            style={{backgroundColor: theme.menu}}>
              Tropical
            </button>
        )}
        </ThemeContex.Consumer>
        </li>
        <li>
        <ThemeContex.Consumer>
        {({theme, discoThemeToggle}) => (
            <button id="Disco" 
            className="btn" 
            onClick={discoThemeToggle}
            style={{backgroundColor: theme.menu}}>
              Disco
            </button>
            )}
          </ThemeContex.Consumer>
        </li>
        <li>
        <ThemeContex.Consumer>
        {({theme, royalThemeToggle}) => (
            <button id="Royal" 
            className="btn"
            onClick={royalThemeToggle}
            style={{backgroundColor: theme.menu}}>
              Royal
            </button>
            )}
            </ThemeContex.Consumer>
        </li>
      </ul>
    </div>
    
  );
}
