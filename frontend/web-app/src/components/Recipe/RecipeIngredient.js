import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';

const recipeIngredient = (props) => {
    return(
        <li className="recipe__item">
            <SVGIcon className="recipe__icon" name="check"/> 
            <div className="recipe__count">1</div>
            <div className="recipe__ingredient">
                <span className="recipe__unit"></span>
                can of tomatoes, whole or crushed
            </div>
        </li>
    );
}

recipeIngredient.propTypes = {

}

recipeIngredient.defaultProps = {
    
}

export default recipeIngredient;

