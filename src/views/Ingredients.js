import React, { Component } from 'react';
import Ingredient from '../components/Ingredient';

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    };
  }

  fetchIngredients() {
    fetch('https://feedme-backend.herokuapp.com/api/ingredients').then(
      (response) => {
        if (response.status !== 200) {
          console.log('Error when retrieving ingredients. Status Code: ' +
            response.status);
          return;
        }
        let ingredients = []
        response.json().then(function(data) {
          console.log(data);
          ingredients.push(Ingredient(data));
        });
        this.setState({ingredients: ingredients});
      }
    )
  }

  componentDidMount() {
    this.fetchIngredients();
  }

  render() {
    return(
      <section className="section">
        <div className="container">
          {this.state.ingredients}
        </div>
      </section>
    );
  }
}

export default Ingredients;
