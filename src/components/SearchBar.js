import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="" />
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
      );
    }
  }

  export default SearchBar;
