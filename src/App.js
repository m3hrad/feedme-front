import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Registration from './views/Registration';
import AddIngredient from './views/AddIngredient';
import Footer from './components/Footer';
import Login from './views/Login';
import RecipeSearch from './views/RecipeSearch.js';
import Recipe from './views/Recipe';
import Ingredient from './views/Ingredient';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Registration} />
          <Route path='/addIngredient' component={AddIngredient} />
          <Route path='/login' component={Login} />
          <Route path='/recipe' component={RecipeSearch} />
          <Route path='/recipes/:id?' component={Recipe} />
          <Route path='/ingredients/:id?' component={Ingredient} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
