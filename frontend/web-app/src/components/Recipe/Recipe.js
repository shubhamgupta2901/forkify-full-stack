import React from 'react';
import '../../index.css';
import RecipeFigure from './RecipeFigure';
import RecipeDetails from './RecipeDetails';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';

class Recipe extends React.Component{
    render(){
        return(
            <div className="recipe">
                <RecipeFigure/>
                <RecipeDetails/>
                <RecipeIngredients/>
                <RecipeDirections/>
            </div>
        );
    }
}

export default Recipe;