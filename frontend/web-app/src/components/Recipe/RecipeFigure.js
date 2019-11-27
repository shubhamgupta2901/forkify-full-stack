import React from 'react';
import PropTypes from 'prop-types';
import testImage from '../../assets/test-1.jpg';

const recipeFigure = (props) => {
    return(
        <figure className="recipe__fig">
            <img src={props.recipe.imageUrl} alt={props.recipe.title} className="recipe__img"/>
            <h1 className="recipe__title">
                <span>{props.recipe.title}</span>
            </h1>
        </figure>
    );
}

recipeFigure.propTypes = {

}

recipeFigure.defaultProps = {
    
}

export default recipeFigure;

