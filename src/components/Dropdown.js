import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Dropdown extends Component {
 constructor(props){
    super(props);
 }
 

  render() {
    return (
      <div> 
        <select>
            {this.props.dataSubmit.map((val) => {
                return (
                    <option value="val">{val}</option>
                )
            })}
        </select>
      </div>
    )
  }
}

export default Dropdown;
