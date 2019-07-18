import React from 'react';
import '../../index.css';
import SVGIcon from '../SVGIcon.js';
import testImage from '../../assets/test-1.jpg'

class Likes extends React.Component{
    render(){
        return(
            <div className="likes">
                <div className="likes__field">
                    <SVGIcon name="heart" className="likes__icon" />
                </div>
                <div className="likes__panel">
                    <ul className="likes__list">
                        <li>
                            <a className="likes__link" href="#23456">
                                <figure className="likes__fig">
                                    <img src={testImage} alt="Test"/>
                                </figure>
                                <div className="likes__data">
                                    <h4 className="likes__name">Pasta with Tomato ...</h4>
                                    <p className="likes__author">The Pioneer Woman</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Likes;