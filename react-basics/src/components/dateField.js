import React from "react";
import Input from "./input";

function DateField(props) {
    return (
        <div>
            <label>
                D. O. B. :
                <Input 
                        value={props.value} 
                        updateValue = {props.handleChange}
                        placeholder = "YYYY/MM/DD" />
            </label>
        </div>
    )
}

export default DateField;