import React from 'react';
import PropTypes from 'prop-types';
import testImage from '../../assets/test-1.jpg';


/**
    {
      "publisher": "Jamie Oliver",
      "f2f_url": "http://food2fork.com/view/0063b5",
      "title": "Simple baked lasagne",
      "source_url": "http://www.jamieoliver.com/recipes/beef-recipes/simple-baked-lasagne",
      "recipe_id": "0063b5",
      "image_url": "http://static.food2fork.com/492_1_1350907030_lrga138.jpg",
      "social_rank": 99.99981883037542,
      "publisher_url": "http://www.jamieoliver.com"
    }
 */

const limitRecipeTitle = (title,limit = 17) => {
    if( title.length <= limit)
    return title;
    return `${title.substring(0,limit-1)}...`;
}

const getClassName = (active) =>{
    let className = "results__link";
    if(active)
        className = className.concat(' results__link--active');
    return className;
}

const result = (props) =>{
    return(
        <li onClick={()=>props.onResultClick(props.recipeId)}>
            <a className={getClassName(props.active)} href={`#${props.recipeId}`}>
                <figure className="results__fig">
                    <img src={props.imageUrl} alt="Recipe"/>
                </figure>
                <div className="results__data">
                    <h4 className="results__name">{limitRecipeTitle(props.recipeName)}</h4>
                    <p className="results__author">{props.publisherName}</p>
                </div>
            </a>
        </li>
    )
}

result.propTypes = {
    recipeId: PropTypes.string.isRequired,
    recipeName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    publisherName: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onResultClick: PropTypes.func,
}

result.defaultProps = {
    recipeId: '',
    recipeName: '',
    imageUrl: '',
    publisherName: '',
    active: false,
    onResultClick: () => {},
}


export default result;