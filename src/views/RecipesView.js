import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Loader from 'react-loader';
import AddRecipe from './AddRecipe';

class RecipesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'recipes',
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
      active: 'recipes'
    });
  }

  componentDidMount() {
    this.fetchIngredients('https://feedme-backend.herokuapp.com/api/recipes');
  }

  deleteIngredient(item) {
    return fetch('https://feedme-backend.herokuapp.com/api/recipes/' + item, {
      method: 'delete'
    })
    .then(response => {
      console.log('Deleted item ', item);
      this.fetchIngredients('https://feedme-backend.herokuapp.com/api/recipes');
  })}

  render() {
    const ingredients = this.state.dataIngredients.map((d,index) =>
        <RecipeList data={d} key={index} deleteIngredient={this.deleteIngredient}/>
    );
    return(
      <div>
        <section className="section">
          <div className="container">
            <div className="tabs">
              <ul>
                <li className={""+this.state.active === 'recipes' ?
                  'is-active' : ''}>
                  <a onClick={this.handleIngredientClick}>Recipes</a></li>
                <li className={"" +""+this.state.active === 'recipes' ?
                  '' : 'is-active'}
                  ><a onClick={this.handleAddClick}>Add recipe</a></li>
              </ul>
            </div>
            {this.state.active === 'recipes' &&
            <Loader loaded={!this.state.loading} className="loader">
              {ingredients}
            </Loader>
            }
            {this.state.active === 'add' &&
            <AddRecipe onChange=
              {this.fetchIngredients('https://feedme-backend.herokuapp.com/api/recipes')} />
            }
          </div>
        </section>
      </div>
    );
  }
}

export default RecipesView;
