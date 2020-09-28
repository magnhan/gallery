import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer";
import FavoritesButton from "./components/Favorites/FavoritesButton";
import ThemeContex, { themes } from "./components/ThemeContext";
import { HashRouter, Route } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Main from "./components/Main/Main";

export default function App() {
  //State hooks for context theme
  const [theme, setTheme] = useState(themes.standard);
  //Toggle functions to change between the three themes
  const tropicalThemeToggle = () => (theme !== themes.tropical?
    setTheme(themes.tropical):setTheme(themes.standard)
  );
  const discoThemeToggle = () => (theme !== themes.disco?
    setTheme(themes.disco):setTheme(themes.standard)
  );
  const royalThemeToggle = () => (theme !== themes.royal?
    setTheme(themes.royal):setTheme(themes.standard)
  );

  return (
    //Passes toggles and theme to all components down the hierarchy (all components except index)
    <ThemeContex.Provider value= {{theme, tropicalThemeToggle, discoThemeToggle, royalThemeToggle}}>
    <HashRouter>
      <div className="grid-container" style={{backgroundColor: theme.background}}>
        <FavoritesButton />
        <Header />
        <Menu/>
        {/*Routes to the two different displays of installations*/}
        <div className="contentDiplayed">
        <Route exact path="/" component={Main} />
        <Route path="/Favorites" component={Favorites} />
        </div>
        </div>
      </HashRouter>
    </ThemeContex.Provider>
  );
}
