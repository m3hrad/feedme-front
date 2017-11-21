import React, { Component } from 'react';
import Ingredient from '../components/Ingredient';
import AddIngredient from '../components/AddIngredient';

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
        let ingredients = [];
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
    this.fetchIngredients('https://feedme-backend.herokuapp.com/api/ingredients');
  }

  render() {
    const ingredients = this.state.dataIngredients.map((d,index) =>
        <Ingredient data={d} key={index}/>
    );
    return(
      <div>
        <section className="section">
          <div className="container">
            {ingredients}
          </div>
        </section>
        <AddIngredient onChange={this.fetchIngredients('https://feedme-backend.herokuapp.com/api/ingredients')} />
      </div>
    );
  }
}

export default Ingredients;
