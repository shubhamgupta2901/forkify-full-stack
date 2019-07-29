import React from 'react';
import '../../index.css';
import Result from './Result';
import ResultPage from './ResultPage';
import * as Utils from '../../utils/Utils';

class Results extends React.Component {
    
    renderResults = () =>{
        const results = [];
        for(let i = 0; i<10; i++)
            results.push(<Result key = {Utils.generateRandomId()}/>);
        return (
            <ul className="results__list">
                {results}
            </ul>
        );
    }

    renderResultPages = () =>{
        return(
            <div className="results__pages">    
                <ResultPage type={"prev"} page={1} />
                <ResultPage type={"next"} page={3}/>
            </div>
        );
    }

    render(){
        return(
            <div className="results">
                {this.renderResults()}
                {this.renderResultPages()}  
            </div>
        );
    }
}

export default Results;