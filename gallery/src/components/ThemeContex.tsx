import React from 'react';
import '../App.css'

export const themes = {
    tropical:{
        background: '#70D6FF'
    },
    standard: {
        background: '#d64550'
    }
};

const ThemeContex = React.createContext(themes.tropical);
export default ThemeContex;