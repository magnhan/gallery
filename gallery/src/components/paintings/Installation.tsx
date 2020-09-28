import React from "react";
import SVG1 from "./SVG1/SVG1";
import SVG2 from "./SVG2/SVG2";
import SVG3 from "./SVG3/SVG3";
import SVG4 from "./SVG4/SVG4";
import SVG5 from "./SVG5/SVG5";
import SVG6 from "./SVG6/SVG6";
import SaveButton from "./../Favorites/SaveButton"
import "./svg.css";
import ThemeContext from "../ThemeContext";
import Poem from "../Poem";

interface installationProps {
  image: number;
  poem: string;
}

export default function Installation(props: installationProps) {
  const {theme} = React.useContext(ThemeContext);
    //Renders an installation based on the image prop passed
    switch(props.image) {
        case 1:
            return (
                <div className="SVG" style={{backgroundColor: theme.photo}}>
                    <SVG1/>
                    <div className="caption">
                        <p className="text">{props.poem}</p>
                        <SaveButton image={props.image}/>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="SVG" style={{backgroundColor: theme.photo}}>
                    <SVG2/>
                    <div className="caption">
                        <p className="text">{props.poem}</p>
                        <SaveButton image={props.image}/>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className="SVG" style={{backgroundColor: theme.photo}}>
                    <SVG3/>
                    <div className="caption">
                        <p className="text">{props.poem}</p>
                        <SaveButton image={props.image}/>
                    </div>
                </div>
            );
        case 4:
            return (
                <div className="SVG" style={{backgroundColor: theme.photo}}>
                    <SVG4/>
                    <div className="caption">
                        <p className="text">{props.poem}</p>
                        <SaveButton image={props.image}/>
                    </div>
                </div>
            );
        case 5:
            return (
                <div className="SVG" style={{backgroundColor: theme.photo}}>
                    <SVG5/>
                    <div className="caption">
                        <p className="text">{props.poem}</p>
                        <SaveButton image={props.image}/>
                    </div>
                </div>
                );
        case 6:
            return (
                <div className="SVG" style={{backgroundColor: theme.photo}}>
                    <SVG6/>
                    <div className="caption">
                        <p className="text">{props.poem}</p>
                        <SaveButton image={props.image}/>
                    </div>
                </div>
            );
        default:
            return(
                <h1>Missing image</h1>
            )
    }
}
