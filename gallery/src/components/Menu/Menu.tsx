import React, { useContext } from "react";
import ThemeContex from "../ThemeContext";
import "./Menu.css";

export default function Menu(props: any) {
//const theme = useContext(ThemeContex);

  return (
    
    <div className="Menu">
      <ul className="Header_Menu">
        <li>
        <ThemeContex.Consumer>
        {({theme, tropicalThemeToggle}) => (
            <button 
            id="Tropical" 
            className="btn" 
            onClick={tropicalThemeToggle} 
            style={{backgroundColor: theme.background}}>
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
            style={{backgroundColor: theme.background}}>
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
            style={{backgroundColor: theme.background}}>
              Royal
            </button>
            )}
            </ThemeContex.Consumer>
        </li>
      </ul>
    </div>
    
  );
}
