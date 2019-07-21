import React from "react";

function Age(props) {
    const calculateAge = (date) => {
        const startDate = new Date(date);
        const endDate = new Date();
        return endDate.getFullYear() - startDate.getFullYear();
    }

    return(
        <label>
            Age:
            {calculateAge(props.date)}
        </label>
    )
}

export default Age;