import React from 'react';
import '../../index.css';
import testImage from '../../assets/test-1.jpg';
import '../SVGIcon';
import SVGIcon from '../SVGIcon';

class Results extends React.Component {
    render(){
        return(
            <div className="results">
                <ul className="results__list">
                    <li>
                        <a className="results__link results__link--active" href="#2d286a">
                            <figure className="results__fig">
                                <img src={testImage} alt="Test"/>
                            </figure>
                            <div className="results__data">
                                <h4 className="results__name">Pasta with Tomato ...</h4>
                                <p className="results__author">The Pioneer Woman</p>
                            </div>
                        </a>
                    </li>

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

                    

                </ul>

                <div className="results__pages">    
                    <button className="btn-inline results__btn--prev" data-goto="1">
                        <span>Page 1</span>
                        <SVGIcon className="search__icon" name="triangle-left"/>     
                    </button>
                    <button className="btn-inline results__btn--next" data-goto="3">
                        <span>Page 3</span>
                        <SVGIcon className = "search__icon" name= "triangle-right"/>
                    </button>
                
                </div>
            </div>
        );
    }
}

export default Results;