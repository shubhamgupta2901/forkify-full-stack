import React from 'react';
import testImage from '../../assets/test-1.jpg';

const result = (props) =>{
    return(
        <li>
            <a className="results__link results__link" href="#2d286a">
                <figure className="results__fig">
                    <img src={testImage} alt="Test"/>
                </figure>
                <div className="results__data">
                    <h4 className="results__name">Pasta with Tomato ...</h4>
                    <p className="results__author">The Pioneer Woman</p>
                </div>
            </a>
        </li>
    )
}

export default result;