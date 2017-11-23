import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    };
    render() {
        let data = this.props.data.map((ingredient, index) =>
            <div key={index}>
                <Link to={'/ingredients/' + ingredient.id}>
                    <b>{ingredient.name} </b>
                </Link>
                <br/>
                brand name: {ingredient.brand_name}
                <br/>
                shop name: {ingredient.shop_name}
                </div>
            );
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default Ingredients;