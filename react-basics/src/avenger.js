import React from "react";

function Avenger(props) {
    return(
        <div>
            <h1>I am  {props.name}</h1>
            <h2>{props.message}</h2>
        </div>
    );
}

export default Avenger;