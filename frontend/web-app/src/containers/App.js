import React from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import Results from '../components/Results/Results'
import Recipe from '../components/Recipe/Recipe';
import Shopping from '../components/Shopping/Shopping';
import * as AppConfig from '../utils/AppConfig';
import * as NetworkService from '../network/Services'; 

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      isSearching: false,
      isRecipeLoading: true,
      searchResult:null,
      currentRecipe: null,
    }
  }

  onRecipeSearch = async (searchKey,page=1) =>{
    this.setState({isSearching: true})
    const searchResult = await NetworkService.searchRecipes(searchKey,page,AppConfig.recipeResultsPerPage);
    this.setState({
      isSearching:false,
      searchResult
    })
  }

  onResultClick = async (recipeId) => {
    this.setState({isRecipeLoading: true});
    const currentRecipe = await NetworkService.getRecipe(recipeId);
    this.setState({isRecipeLoading:false,currentRecipe});
    console.log(currentRecipe);
  }

  render(){
    return (
      <div className={styles.container}>
        <Header onRecipeSearch = {(searchKey) => {
          this.setState({searchKey})
          this.onRecipeSearch(searchKey);
        }}/>
        <Results 
          isSearching={this.state.isSearching}
          searchResult = {this.state.searchResult}
          onResultClick = {(recipeId) =>this.onResultClick(recipeId)}
          onPageChange ={(page)=>this.onRecipeSearch(this.state.searchKey,page)}
        />
        <Recipe isLoading = {this.state.isRecipeLoading} recipe={this.state.currentRecipe}/>
        <Shopping/>
      </div>
    );
  }
}

export default App;
