import React from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import Results from '../components/Results/Results'
import Recipe from '../components/Recipe/Recipe';
import Shopping from '../components/Shopping/Shopping';
import * as NetworkService from '../network/Services'; 
import Signin from '../components/Signin';
import Signup from '../components/Signup';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      isSearching: false,
      isRecipeLoading: true,
      recipes:[],
      currentRecipe: null,
    }
  }

  onRecipeSearch = async (key) =>{
    this.setState({isSearching: true})
    const recipes = await NetworkService.searchRecipes(key);
    this.setState({
      isSearching:false,
      recipes
    })
  }

  onResultClick = async (recipeId) => {
    this.setState({isRecipeLoading: true});
    const currentRecipe = await NetworkService.getRecipe(recipeId);
    this.setState({isRecipeLoading:false,currentRecipe});
    console.log(currentRecipe);
    // this.setState({currentRecipe});
  }

  render(){
    return (
      <div className={styles.container}>
        <Header onRecipeSearch = {(key) => {this.onRecipeSearch(key)}}/>
        <Results 
          isSearching={this.state.isSearching}
          recipes = {this.state.recipes}
          onResultClick = {(recipeId) =>this.onResultClick(recipeId)}
        />
        <Recipe isLoading = {this.state.isRecipeLoading} recipe={this.state.currentRecipe}/>
        <Shopping/>
      </div>
    );
  }
}

export default App;
