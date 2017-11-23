import React, {Component} from 'react';
import logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const style = {
      minHeight : '10em'
    };
    return (
      <nav className="nav has-shadow" id="top">
        <div className="container">
          <div className="nav-left">
            <Link className="nav-item" to='/'>
              <img src={logo} alt="Description" style = {style}/>
            </Link>
          </div>
          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right nav-menu">
            {/*is-active*/}
            <Link className="nav-item is-tab" to="/">
              Home
            </Link>
            <Link className="nav-item is-tab" to="/addRecipe">
              Recipes
            </Link>

            <NavLink className="nav-item is-tab" to="/ingredients"
             activeClassName="is-active">
              Ingredients
            </NavLink>
            {/*<a className="nav-item is-tab">*/}
              {/*Team*/}
            {/*</a>*/}
            {/*<a className="nav-item is-tab">*/}
              {/*Help*/}
            {/*</a>*/}
            {/*<span className="nav-item">*/}
              {/*<Link className="button" to="/login">*/}
                {/*Log in*/}
              {/*</Link>*/}
              {/*<Link className="button" to="/register">*/}
                {/*Sign up*/}
              {/*</Link>*/}
            {/*</span>*/}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
