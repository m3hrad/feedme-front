import React, { Component } from 'react';
import Ingredient from '../components/Ingredient';
import AddIngredient from '../components/AddIngredient';
import Loader from 'react-loader';

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIngredients: [],
      loading: true
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
        response.json().then((data) => {
          let ingredients = [];
          for (const i in data.data) {
            ingredients.push(data.data[i]);
          }
          this.setState({
            dataIngredients: ingredients,
            loading: false
          });
        });
      }
    )
  }

  componentDidMount() {
    this.fetchIngredients('https://feedme-backend.herokuapp.com/api/ingredients');
  }

  render() {
    const ingredients = this.state.dataIngredients.map((d) =>
        <Ingredient data={d} key={d.id}/>
    );
    return(
      <div>
        <section className="section">
          <div className="container">
            <Loader loaded={!this.state.loading} className="loader">
              {ingredients}
            </Loader>
          </div>
        </section>
        <AddIngredient />
      </div>
    );
  }
}

export default Ingredients;
