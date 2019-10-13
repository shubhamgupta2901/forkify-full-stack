import React from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import Results from '../components/Results/Results'
import Recipe from '../components/Recipe/Recipe';
import Shopping from '../components/Shopping/Shopping';
import * as NetworkService from '../network/Services'; 

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      isSearching: false,
      recipes:[],
      currentRecipe: {}
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
    const currentRecipe = await NetworkService.getRecipe(recipeId);
    console.log(currentRecipe);
    this.setState({currentRecipe});
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
        <Recipe/>
        <Shopping/>
        
      </div>
    );
  }
}

export default App;
