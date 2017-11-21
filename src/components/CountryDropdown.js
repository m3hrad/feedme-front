import React, { Component } from 'react';

class CountryDropdown extends Component {
  render() {
    return(
      <div className="field">
        <p className="control has-icons-left">
          <span className="select">
            <select>
              {/*<option defaultValue="Select City">Select City</option>*/}
              <option>Helsinki</option>
              <option>Stockholm</option>
            </select>
          </span>
          <span className="icon is-small is-left">
            <i className="fa fa-globe"></i>
          </span>
        </p>
      </div>
    );
  }
}

export default CountryDropdown;
