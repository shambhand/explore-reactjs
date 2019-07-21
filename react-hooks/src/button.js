import React from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    incrementCounter = () => {
        this.setState( {
            counter: this.state.counter + 1
        });
    }

    componentDidMount() {
        document.title = `${this.state.counter} times`
    }

    componentDidUpdate() {
        document.title = `${this.state.counter} times`;
    }

    render() {
        return(
            <div>
                Counter: {this.state.counter}
                <button onClick={this.incrementCounter}>Clicke Me</button>
            </div>
        )
    }
}

export default Button;