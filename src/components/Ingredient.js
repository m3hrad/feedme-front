import React, { Component } from 'react';

class Ingredient extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  renderAttributes(data) {
    let keys = [];
    for (const key in data) {
      keys.push(key);
    }
    keys.sort();
    const attributes = keys.map((a) => {
      if (data[a] === true) {
        const a_modified = a.replace(/_/g, '-');
        return(
          <p key={a_modified}>&#10004; {a_modified}</p>
        );
      }
      return null;
    });
    return attributes;
  }

  handleDelete() {
    const idx = this.props.data.id;
    return this.props.deleteIngredient(idx);
  }

  render() {
    return(
      <div className="box">
        <nav className="level">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Ingredient</p>
                <p className="subtitle"><strong>{this.props.data.name} </strong>
                <a className="delete" onClick={this.handleDelete}></a></p>
              </div>
            </div>
            {/*<div className="level-item has-text-centered">*/}
              {/*<div>*/}
                {/*<p className="heading">Location</p>*/}
                {/*<p className="subtitle"><strong>{this.props.data.city_id}</strong></p>*/}
              {/*</div>*/}
            {/*</div>*/}
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
