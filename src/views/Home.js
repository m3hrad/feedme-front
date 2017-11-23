import React, { Component } from 'react';
import CountryDropdown from '../components/CountryDropdown';
import SearchBar from '../components/SearchBar';
import landing from '../images/landing.png';

class Home extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          {/*<CountryDropdown />*/}
          <SearchBar />
          <figure className="image">
            <img src={landing} />
          </figure>
        </div>
      </section>
    );
  }
}

export default Home;
