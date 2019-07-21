import React from "react";

function Input(props) {
    return (
        <input 
            type="text" 
            value={props.value} 
            placeholder = "Enter value"
            onChange = {props.updateValue}
            className="input"
        />
    )
}

export default Input;