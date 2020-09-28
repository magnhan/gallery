import React from "react";

import SVG1 from "./SVG1/SVG1";
import SVG2 from "./SVG2/SVG2";
import SVG3 from "./SVG3/SVG3";
import SVG4 from "./SVG4/SVG4";
import SVG5 from "./SVG5/SVG5";
import SVG6 from "./SVG6/SVG6";
import "./svg.css";
import SaveButton from "../Favorites/SaveButton";
import ThemeContext from '../ThemeContext';

export default function Installation(props: any) {
    const {theme} = React.useContext(ThemeContext);
    switch(props.image) {
        case 1:
            return (
                <div className="SVG SVG1" style={{backgroundColor: theme.photo}}>
                    <SVG1/>
                    <div className="caption">
                    <p className="text">{props.poem}</p>
                    <SaveButton/>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="SVG SVG2" style={{backgroundColor: theme.photo}}>
                    <SVG2/>
                    <div className="caption">
                    <p className="text">{props.poem}</p>
                    <SaveButton/>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className="SVG SVG3" style={{backgroundColor: theme.photo}}>
                    <SVG3/>
                    <div className="caption">
                    <p className="text">{props.poem}</p>
                    <SaveButton/>
                    </div>
                </div>
            );
        case 4:
            return (
                <div className="SVG SVG4" style={{backgroundColor: theme.photo}}>
                    <SVG4/>
                    <div className="caption">
                    <p className="text">{props.poem}</p>
                    <SaveButton/>
                    </div>
                </div>
            );
        case 5:
            return (
                <div className="SVG SVG5" style={{backgroundColor: theme.photo}}>
                    <SVG5/>
                    <div className="caption">
                    <p className="text">{props.poem}</p>
                    <SaveButton/>
                    </div>
                </div>
                );
        case 6:
            return (
                <div className="SVG SVG6" style={{backgroundColor: theme.photo}}>
                    <SVG6/>
                    <div className="caption">
                    <p className="text">{props.poem}</p>
                    <SaveButton/>
                    </div>
                </div>
            );
        default:
            return(
                <h1>Missing image</h1>
            )
    }
}