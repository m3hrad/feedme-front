import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';
import AddIngredient from './views/AddIngredient';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/addIngredient' component={AddIngredient} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
