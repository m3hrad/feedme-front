import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const idx = this.props.data.id;
    return this.props.deleteIngredient(idx);
  }

  render() {
    const link = '/recipes/'+this.props.data.id;
    return(
      <div className="box">
        <nav className="level">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Recipe</p>
                <p className="subtitle"><Link to={link}><strong>{this.props.data.name}
                   </strong></Link>
                <a className="delete" onClick={this.handleDelete}></a></p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default RecipeList;
