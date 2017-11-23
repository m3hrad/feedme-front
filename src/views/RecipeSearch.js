import React, { Component } from 'react';
import { parse } from 'qs';
import Recipes from '../components/Recipes';


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
        let queryParams = '';
        for (let k in searchQuery){
            if (typeof searchQuery[k] !== 'undefined') {
                queryParams += k + '=' + searchQuery[k] + '&';
            }
        }
        console.log(queryParams);

        fetch(`https://feedme-backend.herokuapp.com/api/recipes?${queryParams}`)
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
            data = <Recipes data = {this.state.recipes}/>
        } else if (infoStatus === 'loading') {
            data = <div className="info loading">Loading recipe data...</div>
        } else if (infoStatus === 'error') {
            data = <div className="info error">Error while loading recipe data.</div>
        }
        const divStyle = {
            margin : '1em'
        };
        return (
            <div style={divStyle}>
                {data}
            </div>
        );
    };
}

export default RecipeSearch;