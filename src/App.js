import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as formDetails from './generateForms.json';
import Typeforms from './components/Typeforms.js';


class App extends Component {
  render() {
    var la = 3;
    console.log(formDetails.keys);
    return (
      <div className="App">
      {formDetails.keys.map((val) => {
        return (<Typeforms type = {+val.type}/>)
      })}
        
      </div>
    );
  }
}

export default App;
