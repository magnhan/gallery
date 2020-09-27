import React from 'react';
import '../App.css'

export const themes = {
    tropical:{
        background: '#70D6FF',
        dark: 'black',
        accent: '#0ffdc',
    },
    standard: {
        background: '#d64550',
        dark: '#1c2826',
        accent: 'blue',
    }, 
    disco:{
        background: 'green',
        dark: 'gray',
        accent: 'orange',

    },
    royal:{
        background: '#7006FF',
        dark: 'light-gray',
        accent: 'yellow'
    },
};

const ThemeContex = React.createContext({
    theme: themes.standard,
    tropicalThemeToggle: () => {},
    discoThemeToggle: () => {},
    royalThemeToggle: () => {},
});
export default ThemeContex;