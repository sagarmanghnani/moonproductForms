import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as formDetails from './generateForms.json';
import Typeforms from './components/Typeforms.js';


class App extends Component {
  render() {

    return (
      <div className="App">
      {formDetails.keys.map((val) => {
        return (<Typeforms type = {+val.type} key = {val.key_id}/>)
      })}
        
      </div>
    );
  }
}

export default App;
