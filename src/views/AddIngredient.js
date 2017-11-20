import React, { Component } from 'react';
import Ingredients from './Ingredients';
// import CountryDropdown from '../components/CountryDropdown';

class AddIngredient extends Component {

  constructor(props) {
      super(props);
      this.state = {
        name: '',
        vegan: false,
        vegetarian: false,
        gluten_free: false,
        low_carb: false,
        low_fat: false,
        protein_rich: false,
        dairy_free: false,
      };

      this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      if ( target.type === 'checkbox' ) {
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;

          this.setState({
              [name]: value
          });
      }
      else {
        this.setState({
            name: target.value
        })
      }
  }


  handleSubmit(event) {
      event.preventDefault();
      const main = this;
      main.setState({
          infoStatus: 'loading'
      });

      fetch(`https://feedme-backend.herokuapp.com/api/ingredients`, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state)})
          .then( function(response) {
              return response;
          })
          .then( function(response) {
              setTimeout( function() {
                  main.setState({
                      infoStatus: 'loaded'
                  });
              }, 300);
              return response.json();
          })
          .then( function(data) {
              main.setState({
                  recipes: data.data
              });
          })
          .catch( function() {
              main.setState({
                  infoStatus: 'error'
              });
          })
  }

  render() {
    const attributes = ['vegan', 'vegetarian', 'gluten_free', 'low_carb', 'low_fat', 'protein_rich', 'dairy_free'].sort();
    const checkboxes = attributes.map((a) => {
      return (
        <label className="checkbox has-margin-right" key={a}>
          <input type="checkbox" name={a} value = {a} checked={this.state[a]} onChange={this.handleInputChange} />
            {' ' + a}
        </label>
      );
    });
    return (
      <div>
      <Ingredients />
      <section className="section">
        <div className="container">
          <p className="subtitle">Add ingredient</p>
          <div className="field">
            <label className="label">Ingredient name</label>
            <div className="control">
              <input className="input" type="text" placeholder="" onChange={this.handleInputChange} value={this.state.name}/>
            </div>
          </div>
          {/*<label className="label">Location</label>*/}
          {/*<CountryDropdown />*/}
          <div className="field">
            <p className="control">
              {checkboxes}
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-info"  value="Submit" onClick={this.handleSubmit.bind(this)} >
                Submit
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default AddIngredient
