import React, {Component} from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="nav has-shadow" id="top">
        <div className="container">
          <div className="nav-left">
            <Link className="nav-item" to='/'>
              <img src={logo} alt="Description"/>
            </Link>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            <a className="nav-item is-tab is-active">
              Home
            </a>
            <Link className="nav-item is-tab" to="/addIngredient">
              Ingredients
            </Link>
            <a className="nav-item is-tab">
              Team
            </a>
            <a className="nav-item is-tab">
              Help
            </a>
            <span className="nav-item">
              <Link className="button" to="/login">
                Log in
              </Link>
              <Link className="button" to="/register">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar
