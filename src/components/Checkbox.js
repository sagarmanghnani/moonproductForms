import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Checkbox extends Component {
  constructor(props) {
      super(props);

  }

  render() {
    return (
      <div>
        <select multiple>
            {this.props.dataSubmit.map((val) => {
                return (
                <option value = "val">{val}</option>
                )
            })}
        </select>
      </div>
    )
  }
}

export default Checkbox
