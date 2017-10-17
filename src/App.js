import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Registration from './views/Registration';
import AddIngredient from './views/AddIngredient';
import Footer from './components/Footer';
import Login from './views/Login';
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
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
