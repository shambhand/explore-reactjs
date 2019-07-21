import React, {Component} from 'react';
import './App.css';
import Avenger from './avenger';
import Clock from "./clock"
import Name from "./components/name"
import DateField from './components/dateField';
import Age from './components/age';
  
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: ""
    }
  } 

  updateDate = (event) => {
    this.setState({
        date: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <Avenger  name="Iron Man"
                message="I am rich"/>
        <Name label = "First Name:" />
        <Name label = "Last Name:" />
        <DateField value={this.state.date} 
          handleChange={this.updateDate}
          />
        <Age date={this.state.date} />
        <Clock />
      </div>
    );
  }
}

export default App;
