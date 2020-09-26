import React from "react";

import SVG1 from "./SVG1/SVG1";
import SVG2 from "./SVG2/SVG2";
import SVG3 from "./SVG3/SVG3";
import SVG4 from "./SVG4/SVG4";
import SVG5 from "./SVG5/SVG5";
import SVG6 from "./SVG6/SVG6";
import "./svg.css";

export default function Installation(props: any) {
    switch(props.image) {
        case 1:
            return (
                <div className="SVG SVG1">
                    <SVG1/>
                    <p className="text">{props.poem}</p>
                </div>
            );
        case 2:
            return (
                <div className="SVG SVG2">
                    <SVG2/>
                    <p className="text">{props.poem}</p>
                </div>
            );
        case 3:
            return (
                <div className="SVG SVG3">
                    <SVG3/>
                    <p className="text">{props.poem}</p>
                </div>
            );
        case 4:
            return (
                <div className="SVG SVG4">
                    <SVG4/>
                    <p className="text">{props.poem}</p>
                </div>
            );
        case 5:
            return (
                <div className="SVG SVG5">
                    <SVG5/>
                    <p className="text">{props.poem}</p>
                </div>
                );
        case 6:
            return (
                <div className="SVG SVG6">
                    <SVG6/>
                    <p className="text">{props.poem}</p>
                </div>
            );
        default:
            return(
                <h1>Missing image</h1>
            )
    }
}