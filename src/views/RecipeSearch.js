import React, { Component } from 'react';
import { parse } from 'qs';


class RecipeSearch extends Component {
    constructor(props) {

        super(props);
        this.state = {
            recipes: []
        };
    };
    _getRecipeInfo = () => {


        const main = this;
        main.setState({
            infoStatus: 'loading'
        });

        const searchQuery = parse(this.props.location.search.substr(1));
        var nameQuery = '';
        if (typeof searchQuery.name !== 'undefined') {
            nameQuery = 'name='+searchQuery.name;
        }
        fetch(`https://feedme-backend.herokuapp.com/api/recipes?${nameQuery}`)
            .then( function(response) {
                return response;
            })
            .then( function(response) {
                setTimeout( function() {
                    main.setState({
                        infoStatus: 'loaded'
                    });
                }, 300);
                return response.json();
            })
            .then( function(data) {
                main.setState({
                    recipes: data.data
                });
            })
            .catch( function() {
                main.setState({
                    infoStatus: 'error'
                });
            })
    };
    componentWillMount() {
        this._getRecipeInfo();
    };

    render() {
        const {
            infoStatus
        } = this.state;
        let data = null;

        if (infoStatus === 'loaded') {
            data = this.state.recipes.map((recipe, index) =>
                <div key={index} >
                    <b> {recipe.name} </b>
                    <span>({recipe.duration} minutes)</span>
                    <br/>
                    <i> {recipe.description} </i>
                    <br/>
                    <br/>
                    <b>ingredients:</b>
                    <br/>
                    {recipe.ingredients.map((ingredient) =>
                        <div key={ingredient.id}>
                        name: {ingredient.name}
                        <br/>
                        brand name: {ingredient.brand_name}
                        <br/>
                        shop name: {ingredient.shop_name}
                        </div>
                    )}
                    <br/>
                    how to make: {recipe.recipe_text}
                    <br/>

                </div>
            );
        } else if (infoStatus === 'loading') {
            data = <div className="info loading">Loading recipe data...</div>
        } else if (infoStatus === 'error') {
            data = <div className="info error">Error while loading recipe data.</div>
        }

        return (
            <ul>
                {data}
            </ul>
        );
    };
}

export default RecipeSearch;