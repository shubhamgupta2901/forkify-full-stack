import React from 'react';
import '../../index.css';
import RecipeFigure from './RecipeFigure';
import RecipeDetails from './RecipeDetails';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';
import Loader from '../Loader';

class Recipe extends React.Component{
    render(){
        if(this.props.isLoading)
            return <Loader/>;
        return(
            <div className="recipe">
                <RecipeFigure recipe={this.props.recipe}/>
                <RecipeDetails recipe={this.props.recipe}/>
                <RecipeIngredients recipe={this.props.recipe}/>
                <RecipeDirections recipe={this.props.recipe}/>
            </div>
        );
    }
}

export default Recipe;