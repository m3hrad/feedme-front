import React, { Component } from 'react';
import CountryDropdown from '../components/CountryDropdown';
import SearchBar from '../components/SearchBar';

class Home extends Component {
  render() {
    return (
      <section className="section">
        <div className="container content">
          <CountryDropdown />
          <SearchBar />
        </div>
      </section>
    );
  }
}

export default Home;
