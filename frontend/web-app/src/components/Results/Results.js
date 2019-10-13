import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import Result from './Result';
import PageButton from './PageButton';
import * as Utils from '../../utils/Utils';
import * as AppConfig from '../../utils/AppConfig';
import Loader from '../Loader';

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
class Results extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPage: 1
        }
    }

    onPageButtonClicked = (type) =>{
        if(type === 'prev')
            this.setState((prevState)=>({currentPage: prevState.currentPage-1}))
        else if(type === 'next')
            this.setState((prevState)=>({currentPage: prevState.currentPage+1}))
    }
    
    renderResults = (recipes,pageNumber = 1,resultsPerPage = AppConfig.recipeResultsPerPage) => {
        const startIndex = (pageNumber-1)*resultsPerPage;
        const endIndex = pageNumber*resultsPerPage;
        const recipesToDisplay = recipes.slice(startIndex,Math.min(recipes.length,endIndex));   
        
        const results = [];  
        recipesToDisplay.forEach(recipe =>{
            results.push(<Result
                {...this.props}
                active = {recipe.recipe_id===this.props.currentRecipeId}
                key = {Utils.generateRandomId()}
                recipeId = {recipe.recipe_id}
                recipeName = {recipe.title}
                imageUrl={recipe.image_url}
                publisherName={recipe.publisher}
            />);
        })
        return (
            <ul className="results__list">
                {results}
            </ul>
        );
    }

    renderPageButtons = (recipes, currentPage, resultsPerPage ) => {

        const hasPreviousPage = currentPage>1;
        const hasNextPage = (currentPage*resultsPerPage)< recipes.length;

        return(
            <div className="results__pages">    
                {hasPreviousPage && <PageButton type={"prev"} page={currentPage-1} onClick={(type)=>this.onPageButtonClicked(type)}/>}
                {hasNextPage && <PageButton type={"next"} page={currentPage+1} onClick={(type)=>this.onPageButtonClicked(type)}/>}
            </div>
        );
    }

    renderResultComponents = () => {
        if(this.props.isSearching)
            return <Loader/>;
        return (
            <div>
                {this.renderResults(this.props.recipes,this.state.currentPage,AppConfig.recipeResultsPerPage)}
                {this.renderPageButtons(this.props.recipes, this.state.currentPage, AppConfig.recipeResultsPerPage)}
            </div> 
        )
    }

    render() {
        return(
            <div className="results">
                {this.renderResultComponents()}
            </div>
        );
    }
}

Results.propTypes = {
    isSearching : PropTypes.bool,
    recipes: PropTypes.arrayOf(PropTypes.object),
    currentRecipeId: PropTypes.string,
}

Results.defaultProps = {
    isSearching: false,
    recipes: [],
    currentRecipeId: ''
}

export default Results;