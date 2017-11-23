import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            vegan: false,
            vegetarian: false,
            gluten_free: false,
            low_carb: false,
            low_fat: false,
            protein_rich: false,
            dairy_free: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        if ( target.type === 'checkbox' ) {
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }
        else if ( target.type === 'select-one' ){
            let index = event.nativeEvent.target.selectedIndex;
            let selectedIngredientName = event.nativeEvent.target[index].text;
            this.setState({
                ingredientId: target.value,
                ingredientName: selectedIngredientName
            });
        }
        else {
            const name = target.name;
            this.setState({
                [name] : target.value
            })
        }
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

  render() {
      let queryString = '';
      for (let k in this.state){
          if (this.state[k] === true) {
              queryString += k + '=' + this.state[k] + '&';
          }
      }

    let url = '/recipe?' + queryString;

    const attributes = ['vegan', 'vegetarian', 'gluten_free', 'low_carb', 'low_fat', 'protein_rich', 'dairy_free'].sort();
    const checkboxes = attributes.map((a) => {
      return (
          <label className="checkbox has-margin-right" key={a}>
              <input type="checkbox" name={a} value = {a} checked={this.state[a]} onChange={this.handleInputChange} />
              {' ' + a}
          </label>
      );
    });
    return (
        <div>
            {checkboxes}
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div className="control">
                    <Link className="button is-info" to={url}>
                        Search
                    </Link>
                </div>
            </div>
            <br/>
        </div>
      );
    }
  }

  export default SearchBar;
