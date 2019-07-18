import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Results from './components/Results/Results'
import Recipe from './components/Recipe/Recipe';
import Shopping from './components/Shopping/Shopping';

function App() {
  return (
    <div className="container">
      <Header/>
      <Results/>
      <Recipe/>
      <Shopping/>
    </div>
  );
}

export default App;
