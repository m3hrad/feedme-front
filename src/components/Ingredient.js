import React, { Component } from 'react';

class Ingredient extends Component {

  renderAttributes(data) {
    let keys = [];
    for (const key in data) {
      keys.push(key);
    }
    const attributes = keys.map((a) => {
      if (data[a] === true) {
        return(
          <p>&#10004; {a}</p>
        );
      }
    });
    return attributes;
  }

  render() {
    return(
      <div className="box">
        <nav className="level">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Ingredient</p>
                <p className="subtitle"><strong>{this.props.data.name}</strong></p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Location</p>
                <p className="subtitle"><strong>{this.props.data.city_id}</strong></p>
              </div>
            </div>
          </div>

          <div className="level-right">
            <div className="level-item has-text-centered">
              <div>
                {this.renderAttributes(this.props.data)}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Ingredient;
