import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import * as formData from '../generatedFormData.json';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
let inputField = null;

export class Typeforms extends Component {
  constructor(props) {
     super(props);
     this.checkType = this.checkType.bind(this);
     this.filterData = this.filterData.bind(this);
     this.dropdown = [];
     this.checkbox = [];
     this.inputField = [];
     this.filterData();
     this.checkType();
  }
  filterData()
  {
    // console.log(formData.infos[0].type);
    formData.infos.map((val) => {
      if(val.type == 1)
      {
        this.dropdown.push(val.value);
        console.log(this.dropdown);
      }
      else if(val.type == 2)
      {
        this.checkbox.push(val.value);
      }

      else
      {
        this.inputField.push(val.value);
      }

      return val;
    });
  }

  checkType()
  {
    if(this.props.type == 1)
    {
      // console.log(formData);
      inputField = (
        <div>
          <Dropdown dataSubmit = {this.dropdown}/>
        </div>
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

