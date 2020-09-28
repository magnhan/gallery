import React from 'react';
import '../App.css'

export const themes = {
    tropical:{
        menu: '#2ace82',
        footer: '#32e7c8',
        photo: '#a7e351',
        background: '#ffd670',
    },
    standard: {
        menu: '#d64550',
        footer: '#daefb3',
        photo: '#ea9e8d',
        background: '#eef4d4',
    },
    disco:{
        menu: '#7b1daf',
        footer: '#d4ff47',
        photo: '#ff2fb9',
        background: '#C0C0C0',
    },
    royal:{
        menu: '#9b1c31',
        footer: '#FCD882',
        photo: '#000242',
        background: '#FFEEA3'
    },
};

const ThemeContex = React.createContext({
    theme: themes.standard,
    tropicalThemeToggle: () => {},
    discoThemeToggle: () => {},
    royalThemeToggle: () => {},
});
export default ThemeContex;