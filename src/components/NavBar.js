import React, {Component} from 'react';
import logo from '../images/logo.png'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav has-shadow" id="top">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item" href="/">
              <img src={logo} alt="Description"/>
            </a>
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
            <a className="nav-item is-tab" href="/addIngredient">
              Ingredients
            </a>
            <a className="nav-item is-tab">
              Team
            </a>
            <a className="nav-item is-tab">
              Help
            </a>
            <span className="nav-item">
              <a className="button">
                Log in
              </a>
              <a className="button is-info" href="/register">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar
