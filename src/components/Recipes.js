import React, {Component} from 'react';
import Ingredients from './Ingredients';
import { Link } from 'react-router-dom';


class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    };
    render() {
        let data = this.props.data.map((recipe, index) =>
            <div key={index} >
                <Link to={'/recipes/' + recipe.id}>
                    <b> {recipe.name} </b>
                </Link>
                <span>({recipe.duration} minutes)</span>
                <br/>
                <i> {recipe.description} </i>
                <br/>
                <br/>
                <b>ingredients:</b>
                <br/>
                <Ingredients data={recipe.ingredients}/>
                <br/>
                how to make: {recipe.recipe_text}
                <br/>
            </div>
        );
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default Recipes;
