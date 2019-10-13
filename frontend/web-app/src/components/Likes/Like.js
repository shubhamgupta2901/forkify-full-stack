import React from 'react';
import PropTypes from 'prop-types';
import testImage from '../../assets/test-1.jpg';

const like = (props) => {
    return(
        <li>
            <a className="likes__link" href="#23456">
                <figure className="likes__fig">
                    <img src={testImage} alt="Test"/>
                </figure>
                <div className="likes__data">
                    <h4 className="likes__name">{props.name}</h4>
                    <p className="likes__author">{props.author}</p>
                </div>
            </a>
        </li>
    );
}

like.propTypes ={
    name: PropTypes.string,
    author: PropTypes.string,
}

like.defaultProps = {
    name: 'Pasta with Tomato ...',
    author: 'The Pioneer Woman',
}

export default like;