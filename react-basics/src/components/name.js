import React from "react";
import Input from "./input";

class Name extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || ""
        }
    }

    update = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return(
            <div>
                <label>
                    {this.props.label}
                    <Input 
                        value = {this.state.name} 
                        updateValue = {this.update}
                    />
                </label>
            </div>
        )
    }
}

export default Name;