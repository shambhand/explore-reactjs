import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    updateClock = () => {
        this.setState(
            {
                time: new Date()
            }
        )
    };

    componentDidMount() {
        setInterval(this.updateClock, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            <h1> {this.state.time.toLocaleTimeString()} </h1>
        );
    }
}

export default Clock;