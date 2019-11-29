import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import Result from './Result';
import PageButton from './PageButton';
import * as Utils from '../../utils/Utils';
import * as AppConfig from '../../utils/AppConfig';
import Loader from '../Loader';

class Results extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    renderResults = () => {
        if(this.props.searchResult){
            const recipes = this.props.searchResult.results;
            const resultsToDisplay = recipes.map(recipe => (
                <Result
                    {...this.props}
                    active = {recipe.recipe_id===this.props.currentRecipeId}
                    key = {recipe._id}
                    recipeId = {recipe._id}
                    recipeName = {recipe.title}
                    imageUrl={recipe.imageUrl}
                    publisherName={recipe.publisher.name}
                    onResultClick={this.props.onResultClick}
                />
            ))
            return (
                <ul className="results__list">
                    {resultsToDisplay}
                </ul>
            );
        }
        return null;
    }
    
    renderPageButtons = () => {
        const {searchResult, onPageChange} = this.props;
        if(searchResult){
            const hasPreviousPage = searchResult.page >1;
            const hasNextPage = (searchResult.page*searchResult.pageSize) < searchResult.totalResults;
            return(
                <div className="results__pages">    
                    {hasPreviousPage && <PageButton type={"prev"} page={searchResult.page-1} onClick={(type)=>onPageChange(searchResult.page-1)}/>}
                    {hasNextPage && <PageButton type={"next"} page={searchResult.page+1} onClick={(type)=>onPageChange(searchResult.page+1)}/>}
                </div>
            );
        }
        return null; 
    }

    renderResultComponents = () => {
        if(this.props.isSearching)
            return <Loader/>;
        return (
            <div>
                {/* {this.renderResults(this.props.recipes,this.state.currentPage,AppConfig.recipeResultsPerPage)} */}
                {/* {this.renderPageButtons(this.props.recipes, this.state.currentPage, AppConfig.recipeResultsPerPage)} */}
                {this.renderResults()}
                {this.renderPageButtons()}
            </div> 
        )
    }

    render() {
        console.log('Results', JSON.stringify(this.props.searchResult));
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