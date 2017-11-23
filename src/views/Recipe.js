import React, { Component } from 'react';
import Recipes from '../components/Recipes';


class Recipe extends Component {

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

        let queryId = this.props.match.params.id;
        fetch(`https://feedme-backend.herokuapp.com/api/recipes/${queryId}`)
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

        return (
            <ul>
                {data}
            </ul>
        );
    };
}

export default Recipe;