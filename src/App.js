import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CountryDropdown from './components/CountryDropdown';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
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
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
