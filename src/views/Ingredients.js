import React, { Component } from 'react';
import Ingredient from '../components/Ingredient';

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIngredients: []
    };
  }

  fetchIngredients(url) {
    fetch(url).then(
      (response) => {
        if (response.status !== 200) {
          console.log('Error when retrieving ingredients. Status Code: ' +
            response.status);
          return;
        }
        let ingredients = []
        response.json().then((data) => {
          let ingredients = [];
          for (const i in data.data) {
            ingredients.push(data.data[i]);
          }
          this.setState({dataIngredients: ingredients});
        });
      }
    )
  }

  componentDidMount() {
    this.fetchIngredients(this.props.url);
  }

  render() {
    const ingredients = this.state.dataIngredients.map((d) =>
        <Ingredient data={d} key={d.name}/>
    );
    return(
      <section className="section">
        <div className="container">
          {ingredients}
        </div>
      </section>
    );
  }
}

export default Ingredients;
