import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    let attributeElements = [];
    for (const d in this.props.data) {
      console.log(d);
      if (d === 'vegan') {
        attributeElements.push(() => <p>Vegan</p>);
      }
    }
    console.log(attributeElements);
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
              {attributeElements[0]()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Ingredient;
