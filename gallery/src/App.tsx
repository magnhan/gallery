import React, { useState } from "react";
import "./App.css";
import "./index.css";
import DisplayArt from "./components/DisplayArt";
import Header from "./components/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer";
import FavoritesButton from "./components/Favorites/FavoritesButton";
import ThemeContex, {themes} from './components/ThemeContext';
import { HashRouter } from "react-router-dom";


export default function App() {
  const [theme, setTheme] = useState(themes.standard);
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
    <ThemeContex.Provider value= {{theme, tropicalThemeToggle, discoThemeToggle, royalThemeToggle}}>
    <HashRouter>
      <div className="grid-container" style={{backgroundColor: theme.background}}>
        <FavoritesButton />
        <Header />
        <Menu/>
        <div className="contentDiplayed">
        <DisplayArt/>
        </div>
        <Footer />
      </div>
      </HashRouter>
    </ThemeContex.Provider>
    
  );
}
