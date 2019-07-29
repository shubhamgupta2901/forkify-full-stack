import React from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import Results from '../components/Results/Results'
import Recipe from '../components/Recipe/Recipe';
import Shopping from '../components/Shopping/Shopping';

function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <Results/>
      <Recipe/>
      <Shopping/>
    </div>
  );
}

export default App;
