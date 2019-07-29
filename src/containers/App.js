import React from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import Results from '../components/Results/Results'
import Recipe from '../components/Recipe/Recipe';
import Shopping from '../components/Shopping/Shopping';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      isSearching: false
    }
  }
  onRecipeSearch = (key) =>{
    this.setState({isSearching: true})
  }

  render(){
    return (
      <div className={styles.container}>
        <Header onRecipeSearch = {(key) => {this.onRecipeSearch(key)}}/>
        <Results isSearching={this.state.isSearching}/>
        <Recipe/>
        <Shopping/>
      </div>
    );
  }
}

export default App;
