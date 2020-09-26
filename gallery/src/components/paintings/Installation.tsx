import React from "react";

import SVG1 from "./SVG1/SVG1";
import SVG2 from "./SVG2/SVG2";
import SVG3 from "./SVG3/SVG3";
import SVG4 from "./SVG4/SVG4";
import SVG5 from "./SVG5/SVG5";
import SVG6 from "./SVG6/SVG6";

export default function Installation(props: any) {
    switch(props.image) {
        case 1:
            return (
                <div>
                    <SVG1/>
                    {props.poem}
                </div>
            );
        case 2:
            return (
                <div>
                    <SVG2/>
                    {props.poem}
                </div>
            );
        case 3:
            return (
                <div>
                    <SVG3/>
                    {props.poem}
                </div>
            );
        case 4:
            return (
                <div>
                    <SVG4/>
                    {props.poem}
                </div>
            );
        case 5:
            return (
                <div>
                    <SVG5/>
                    {props.poem}
                </div>
                );
        case 6:
            return (
                <div>
                    <SVG6/>
                    {props.poem}
                </div>
            );
        default:
            return(
                <h1>Missing image</h1>
            )
    }
}