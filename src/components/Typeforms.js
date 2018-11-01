import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
let inputField = null;

export class Typeforms extends Component {
  constructor(props) {
     super(props);
     this.checkType();
     this.checkType = this.checkType.bind(this);
  }

  checkType()
  {
    if(this.props.type == 1)
    {
      inputField = (
        <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
       </select>
      )
    }

    else if(this.props.type == 2)
    {
      inputField = (
      <select multiple>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      )
    }

    else{
      inputField = (
        <div>
        <p>Hello workd</p>  
        <input type = "text"/>
        </div>
      )
    }
  }
  render() {
    return (
       <div>
         {inputField}
       </div>
    )
  }
}

export default Typeforms

