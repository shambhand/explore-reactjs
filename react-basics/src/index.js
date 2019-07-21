import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';

function template() {
    return(
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt=""></img>
                <h2>Welcome to Technogise</h2>
            </div>
            <App />
        </div>
    )
}

ReactDOM.render(
    template(), 
    document.getElementById('root')
);