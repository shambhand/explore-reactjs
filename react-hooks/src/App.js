import React from 'react'; 
import './App.css';
import Button from './button';
import StateWithEffect from './StateWithEffect';
import SearchBar from './SearchBar';
import Quote from './Quotes';
import ListCountries from './ListCountries';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button/>

      <StateWithEffect/>
      <SearchBar/>

      <Quote />

      <ListCountries />
    </div>
  );
}

export default App;
