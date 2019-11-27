import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';
import RecipeIngredient from './RecipeIngredient';
import * as Utils from '../../utils/Utils';

class RecipeIngredients extends React.Component  {
    
    renderIngredients =()=>{
        const recipeIngredients = this.props.recipe.ingredients.map(ingredient=> (<RecipeIngredient key={Utils.generateRandomId()} ingredient={ingredient}/>));
        return(
            <ul className="recipe__ingredient-list">
                {recipeIngredients}
            </ul>
        );
    }
    renderAddToShoppingListButton = () => {
        return(
            <button className="btn-small recipe__btn">
                <SVGIcon className="search__icon" name="shopping-cart"/>   
                <span>Add to shopping list</span>
            </button>
        )
    }

    render(){
        return(
            <div className="recipe__ingredients">
                {this.renderIngredients()}
                {this.renderAddToShoppingListButton()}      
            </div>
        )
    }
    
}

RecipeIngredients.propTypes = {

}

RecipeIngredients.defaultProps = {
    
}

export default RecipeIngredients;

