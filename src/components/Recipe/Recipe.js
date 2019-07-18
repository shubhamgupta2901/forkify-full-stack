import React from 'react';
import '../../index.css';
import testImage from '../../assets/test-1.jpg';
import SVGIcon from '../SVGIcon';

class Recipe extends React.Component{
    render(){
        return(

        <div className="recipe">
            <figure className="recipe__fig">
                <img src={testImage} alt="Tomato" className="recipe__img"/>
                <h1 className="recipe__title">
                    <span>Pasta with tomato cream sauce</span>
                </h1>
            </figure>
            <div className="recipe__details">
                <div className="recipe__info">
                    <SVGIcon className="recipe__info-icon" name="stopwatch"/>
                    <span className="recipe__info-data recipe__info-data--minutes">45</span>
                    <span className="recipe__info-text"> minutes</span>
                </div>
                <div className="recipe__info">
                    <SVGIcon className="recipe__info-icon" name="icon-man"/>
                    <span className="recipe__info-data recipe__info-data--people">4</span>
                    <span className="recipe__info-text"> servings</span>

                    <div className="recipe__info-buttons">
                        <button className="btn-tiny">
                        <SVGIcon name="icon-circle-with-minus"/>
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button className="btn-tiny">
                            <SVGIcon name="circle-with-plus"/>
                        </button>
                    </div>

                </div>
                <button className="recipe__love">
                <SVGIcon className="recipe__info-icon" name="stopwatch"/>
                    <svg className="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>

            <div className="recipe__ingredients">
                <ul className="recipe__ingredient-list">
                    <li className="recipe__item">
                    <SVGIcon className="recipe__info-icon" name="stopwatch"/>
                        <svg className="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div className="recipe__count">1000</div>
                        <div className="recipe__ingredient">
                            <span className="recipe__unit">g</span>
                            pasta
                        </div>
                    </li>

                    <li className="recipe__item">
                        <SVGIcon className="recipe__icon" name="check"/>
                        <div className="recipe__count">1/2</div>
                        <div className="recipe__ingredient">
                            <span className="recipe__unit">cup</span>
                            ricotta cheese
                        </div>
                    </li>

                    <li className="recipe__item">
                        <SVGIcon className="recipe__icon" name="check"/> 
                        <div className="recipe__count">1</div>
                        <div className="recipe__ingredient">
                            <span className="recipe__unit"></span>
                            can of tomatoes, whole or crushed
                        </div>
                    </li>


                    <li className="recipe__item">
                        <SVGIcon className="recipe__icon" name="check"/>
                        <div className="recipe__count">1</div>
                        <div className="recipe__ingredient">
                            <span className="recipe__unit"></span>
                            can tuna packed in olive oil
                        </div>
                    </li>

                    <li className="recipe__item">
                        <SVGIcon className="recipe__icon" name="check"/>
                        <div className="recipe__count">1/2</div>
                        <div className="recipe__ingredient">
                            <span className="recipe__unit">cup</span>
                            grated parmesan cheese
                        </div>
                    </li>

                    <li className="recipe__item">
                        <SVGIcon className="recipe__icon" name="check"/>
                        <div className="recipe__count">1/4</div>
                        <div className="recipe__ingredient">
                            <span className="recipe__unit">cup</span>
                            fresh basil, chopped or torn
                        </div>
                    </li>
                </ul>

                <button className="btn-small recipe__btn">
                    <SVGIcon className="search__icon" name="shopping-cart"/>   
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div className="recipe__directions">
                <h2 className="heading-2">How to cook it</h2>
                <p className="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span className="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
                </p>
                <a className="btn-small recipe__btn" href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/" target="_blank">
                    <span>Directions</span>
                    <SVGIcon className="search__icon" name="triangle-right"/>
                </a>
            </div>
        </div>
        );
    }
}

export default Recipe;