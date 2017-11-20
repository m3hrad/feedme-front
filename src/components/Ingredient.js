import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let attributeElements = []
    if (this.props.vegan) {
      attributeElements.push('<p>&#10004; Vegan</p>')
    }
    else {
      attributeElements.push('<p>&#10007; Vegan</p>')
    }

    return(
      <nav className="level">
        <div className="level-left">
          <div className="level-item has-text-centered">
            <p className="heading">Ingredient</p>
            <p className="title">{this.props.name}</p>
          </div>
          <div className="level-item has-text-centered">
            <p className="heading">Location</p>
            <p className="title">{this.props.location}</p>
          </div>
        </div>

        <div className="level-right">
          <div className="level-item has-text-centered">
            {attributeElements}
          </div>
        </div>
      </nav>
    );
  }
}

export default Ingredient;
