import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

  render() {
    let url = '/recipe?name=' + this.state.value;
    return (
      <div className="field has-addons">
        <div className="control">
            <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="control">
            <Link className="button is-info" to={url}>
                Search
            </Link>
        </div>
      </div>
      );
    }
  }

  export default SearchBar;
