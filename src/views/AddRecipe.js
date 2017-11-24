import React, { Component } from 'react';
import RecipesView from './RecipesView';
// import CountryDropdown from '../components/CountryDropdown';

class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            recipe_text: '',
            vegan: false,
            vegetarian: false,
            gluten_free: false,
            low_carb: false,
            low_fat: false,
            protein_rich: false,
            dairy_free: false,
            ingredients: [],
            allIngredients:[],
            ingredientAmount: 0,
            ingredientUnit: '',
            ingredientId: 1,
            ingredientName:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddIngredient = this.handleAddIngredient.bind(this);
    }


    _getAllIngredientsInfo = () => {

        const main = this;
        main.setState({
            infoStatus: 'loading'
        });

        fetch(`https://feedme-backend.herokuapp.com/api/ingredients`)
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
                    allIngredients: data.data,
                    ingredientName: data.data[0].name
                });
            })
            .catch( function() {
                main.setState({
                    infoStatus: 'error'
                });
            })
    };

    componentWillMount() {
        this._getAllIngredientsInfo();
    };

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


    handleSubmit(event) {
        event.preventDefault();
        const main = this;
        main.setState({
            infoStatus: 'loading'
        });

        fetch(`https://feedme-backend.herokuapp.com/api/recipes`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": this.state.name,
                "description": this.state.description,
                "recipe_text": this.state.recipe_text,
                "vegan": this.state.vegan,
                "vegetarian": this.state.vegetarian,
                "gluten_free": this.state.gluten_free,
                "low_carb": this.state.low_carb,
                "low_fat": this.state.low_fat,
                "protein_rich": this.state.protein_rich,
                "dairy_free": this.state.dairy_free,
                "ingredients": this.state.ingredients
            })})
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
                alert("The recipe added!");
                main.setState({
                    recipes: data.data,
                    name: '',
                    description: '',
                    vegan: false,
                    vegetarian: false,
                    gluten_free: false,
                    low_carb: false,
                    low_fat: false,
                    protein_rich: false,
                    dairy_free: false,
                    ingredients: [],
                    ingredientAmount: 0,
                    ingredientUnit: '',
                    ingredientId: 1,
                    ingredientName:''
                });
            })
            .catch( function() {
                main.setState({
                    infoStatus: 'error'
                });
            })
    }

    handleAddIngredient(event){
        let ingredientsArray = this.state.ingredients.slice();
        ingredientsArray.push({
            "ingredient_id": parseInt(this.state.ingredientId),
            "name": this.state.ingredientName,
            "quantity": parseInt(this.state.ingredientAmount),
            "unit": this.state.ingredientUnit
        });
        this.setState({ ingredients: ingredientsArray })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const attributes = ['vegan', 'vegetarian', 'gluten_free', 'low_carb', 'low_fat', 'protein_rich', 'dairy_free'].sort();
        const checkboxes = attributes.map((a) => {
            return (
                <label className="checkbox has-margin-right" key={a}>
                    <input type="checkbox" name={a} value = {a} checked={this.state[a]} onChange={this.handleInputChange} />
                    {' ' + a}
                </label>
            );
        });
        let ingredientOptions = [];
        const allIng = this.state.allIngredients.slice().sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
        });
        
        for (let k = 0; k < allIng.length; k++) {
            ingredientOptions.push(<option key={k} value={allIng[k].id}> {allIng[k].name} </option>);
        }

        //added ingredients
        const IngredientRows = this.state.ingredients.map((ingredient,index) => {
            return (
                <div key = {index}>
                    {ingredient.name} &nbsp;
                    {ingredient.quantity} &nbsp;
                    {ingredient.unit} &nbsp;
                </div>
            );
        });

        return (
            <section className="section">
                <div className="container">
                    <p className="subtitle">Add recipe</p>
                    <div className="field">
                        <label className="label">recipe name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="" name="name" onChange={this.handleInputChange} value={this.state.name}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">description</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="" name="description" onChange={this.handleInputChange} value={this.state.description}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">recipe text</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="" name="recipe_text" onChange={this.handleInputChange} value={this.state.recipe_text}/>
                        </div>
                    </div>
                    {/*<label className="label">Location</label>*/}
                    {/*<CountryDropdown />*/}
                    <div className="field">
                        <div className="control">
                            {checkboxes}
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <select value={this.state.ingredientId} onChange={this.handleInputChange}>
                                {ingredientOptions}
                            </select>
                            <div className="field">
                                <label>amount</label>
                                <input className="input" type="number" name="ingredientAmount" value={this.state.ingredientAmount} onChange={this.handleInputChange} />
                                </div>
                            <div className="field">
                                <label>unit</label>
                                <input className="input" type="text" name="ingredientUnit" value={this.state.ingredientUnit} onChange={this.handleInputChange} />
                            </div>
                            {IngredientRows}
                            <button className="button is-info"  value="AddIngredient" onClick={this.handleAddIngredient} >
                                + Ingredient
                            </button>
                            <br/>
                            <br/>
                            <button className="button is-info"  value="Submit" onClick={this.handleSubmit.bind(this)} >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AddRecipe
