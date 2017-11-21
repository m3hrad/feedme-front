import React, { Component } from 'react';
import CountryDropdown from './CountryDropdown';

class AddIngredient extends Component {
  render() {
    const attributes = ['vegan', 'vegetarian', 'lactose-free',
  'gluten-free', 'low-carb', 'low-fat', 'protein-rich', 'dairy-free'].sort();
    const checkboxes = attributes.map((a) => {
      return (
        <label className="checkbox has-margin-right" key={a}>
          <input type="checkbox" name="attribute" />
            {' ' + a}
        </label>
      );
    });
    return (
        <div className="container">
          <p className="subtitle">Add ingredient</p>
          <div className="field">
            <label className="label">Ingredient name</label>
            <div className="control">
              <input className="input" type="text" placeholder="" />
            </div>
          </div>
          <label className="label">Location</label>
          <CountryDropdown />
          <div className="field">
            <p className="control">
              {checkboxes}
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-info">
                Submit
              </button>
            </p>
          </div>
        </div>
    );
  }
}

export default AddIngredient
