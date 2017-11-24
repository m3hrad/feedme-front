import React, { Component } from 'react';
import Ingredient from '../components/Ingredient';
import AddIngredient from '../components/AddIngredient';
import Loader from 'react-loader';

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'ingredients',
      dataIngredients: [],
      loading: true
    };

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleIngredientClick = this.handleIngredientClick.bind(this);
    this.deleteIngredient = this.deleteIngredient.bind(this);
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
          ingredients.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
          this.setState({
            dataIngredients: ingredients,
            loading: false
          });
        });
      }
    )
  }

  handleAddClick() {
    this.setState({
      active: 'add'
    });
  }

  handleIngredientClick() {
    this.setState({
      active: 'ingredients'
    });
  }

  componentDidMount() {
    this.fetchIngredients('https://feedme-backend.herokuapp.com/api/ingredients');
  }

  deleteIngredient(item) {
    return fetch('https://feedme-backend.herokuapp.com/api/ingredients/' + item, {
      method: 'delete'
    })
    .then(response => {
      console.log('Deleted item ', item);
      this.fetchIngredients('https://feedme-backend.herokuapp.com/api/ingredients');
  })}

  render() {
    const ingredients = this.state.dataIngredients.map((d,index) =>
        <Ingredient data={d} key={index} deleteIngredient={this.deleteIngredient}/>
    );
    return(
      <div>
        <section className="section">
          <div className="container">
            <div className="tabs">
              <ul>
                <li className={""+this.state.active === 'ingredients' ?
                  'is-active' : ''}>
                  <a onClick={this.handleIngredientClick}>Ingredients</a></li>
                <li className={"" +""+this.state.active === 'ingredients' ?
                  '' : 'is-active'}
                  ><a onClick={this.handleAddClick}>Add ingredient</a></li>
              </ul>
            </div>
            {this.state.active === 'ingredients' &&
            <Loader loaded={!this.state.loading} className="loader">
              {ingredients}
            </Loader>
            }
          </div>
        </section>
        {this.state.active === 'add' &&
        <AddIngredient onChange=
          {this.fetchIngredients('https://feedme-backend.herokuapp.com/api/ingredients')} />
        }
      </div>
    );
  }
}

export default Ingredients;
