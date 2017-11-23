import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Registration from './views/Registration';
import Ingredients from './views/Ingredients';
import Footer from './components/Footer';
import Login from './views/Login';
import RecipeSearch from './views/RecipeSearch.js';
import Recipe from './views/Recipe';
import Ingredient from './views/Ingredient';
import { Switch, Route } from 'react-router-dom';
import AddRecipe from "./views/AddRecipe.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Registration} />
          <Route path='/addRecipe' component={AddRecipe} />
          <Route path='/ingredients/:id' component={Ingredient} />
          <Route path='/ingredients' component={Ingredients} />
          <Route path='/login' component={Login} />
          <Route path='/recipe' component={RecipeSearch} />
          <Route path='/recipes/:id?' component={Recipe} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
