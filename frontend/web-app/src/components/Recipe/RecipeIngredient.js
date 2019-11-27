import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';

const recipeIngredient = (props) => {
    return(
        <li className="recipe__item">
            <SVGIcon className="recipe__icon" name="check"/> 
            <div className="recipe__count">{props.ingredient.quantity}</div>
            <div className="recipe__ingredient">
                <span className="recipe__unit">{props.ingredient.unit}</span>
                 {` ${props.ingredient.ingredient}`}
            </div>
        </li>
    );
}

recipeIngredient.propTypes = {

}

recipeIngredient.defaultProps = {
    
}

export default recipeIngredient;

