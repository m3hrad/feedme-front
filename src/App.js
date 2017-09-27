import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CountryDropdown from './components/CountryDropdown';
import SearchBar from './components/SearchBar.js';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <section className="section">
          <div className="container content">
            <CountryDropdown />
            <SearchBar />
            <p className="has-text-centered">Skeleton template for a basic layout.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
