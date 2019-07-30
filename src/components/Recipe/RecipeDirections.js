import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';

const recipeDirections = (props) => {
    return(
        <div className="recipe__directions">
            <h2 className="heading-2">How to cook it</h2>
            <p className="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span className="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
            </p>
            <a className="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" >
                <span>Directions</span>
                <SVGIcon className="search__icon" name="triangle-right"/>
            </a>
        </div>
    );
}

recipeDirections.propTypes = {

}

recipeDirections.defaultProps = {
    
}

export default recipeDirections;

