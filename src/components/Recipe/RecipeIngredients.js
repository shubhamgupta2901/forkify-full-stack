import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';
import RecipeIngredient from './RecipeIngredient';
import * as Utils from '../../utils/Utils';

class RecipeIngredients extends React.Component  {
    
    renderIngredients =()=>{
        const ingredients = []
        for(let i =0; i<6; i++){
            ingredients.push(<RecipeIngredient
                key = {Utils.generateRandomId()}
            />)
        }
        return(
            <ul className="recipe__ingredient-list">
                {ingredients}
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

