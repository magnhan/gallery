import React from 'react';
import "../components/paintings/svg.css";

interface Props{
    poems: string;
}

 const Poem = (props: Props) => {
    if(!props.poems){
        return(
            <p className="text"> {props.poems} Loading...</p>
        )
    }
    return(
        <p className="text">{props.poems}</p>
    )
}

export default Poem;