import React, { Component } from 'react';

class AddIngredient extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <p className="subtitle">Add ingredient</p>
          <div className="field">
            <label className="label">Ingredient name</label>
            <div className="control">
              <input className="input" type="text" placeholder="" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" name=""/>
                I agree to the <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddIngredient
