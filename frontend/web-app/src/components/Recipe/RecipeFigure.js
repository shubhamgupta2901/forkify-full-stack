import React from 'react';
import PropTypes from 'prop-types';
import testImage from '../../assets/test-1.jpg';

const recipeFigure = (props) => {
    return(
        <figure className="recipe__fig">
            <img src={testImage} alt="Tomato" className="recipe__img"/>
            <h1 className="recipe__title">
                <span>Pasta with tomato cream sauce</span>
            </h1>
        </figure>
    );
}

recipeFigure.propTypes = {

}

recipeFigure.defaultProps = {
    
}

export default recipeFigure;

