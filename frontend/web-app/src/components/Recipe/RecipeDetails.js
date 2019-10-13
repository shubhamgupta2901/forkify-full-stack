import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';

const recipeDetails = (props) => {
    return(
        <div className="recipe__details">
            <div className="recipe__info">
                <SVGIcon className="recipe__info-icon" name="stopwatch"/>
                <span className="recipe__info-data recipe__info-data--minutes">45</span>
                <span className="recipe__info-text"> minutes</span>
            </div>
            <div className="recipe__info">
                <SVGIcon className="recipe__info-icon" name="man"/>
                <span className="recipe__info-data recipe__info-data--people">4</span>
                <span className="recipe__info-text"> servings</span>

                <div className="recipe__info-buttons">
                    <button className="btn-tiny">
                        <SVGIcon name="circle-with-minus"/>
                    </button>
                    <button className="btn-tiny">
                        <SVGIcon name="circle-with-plus"/>
                    </button>
                </div>
            </div>
            <button className="recipe__love">
                <SVGIcon className="header__likes" name="heart-outlined"/>
            </button>
        </div>
    );
}

recipeDetails.propTypes = {

}

recipeDetails.defaultProps = {
    
}

export default recipeDetails;

