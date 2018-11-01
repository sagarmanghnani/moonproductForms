import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import * as formData from '../generatedFormData.json';
import Checkbox from './Checkbox';
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
    formData.infos.map((val) => {
      if(val.type == 1)
      {
        this.dropdown.push(val.value);
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
      inputField = (
        <div>
          <p>Country</p>
          <Dropdown dataSubmit = {this.dropdown}/>
        </div>
      )
    }

    else if(this.props.type == 2)
    {
      inputField = (
        <div>
          <p>Colors</p>
          <Checkbox dataSubmit = {this.checkbox}/>
      </div>
      )
    }

    else{
      inputField = (
        <div>  
          <label>Description</label>
         <textarea rows="4" cols = "30"/>
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

