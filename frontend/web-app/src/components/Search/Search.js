import React from 'react';
import propTypes from 'prop-types';
import styles from './Search.module.css';
import SVGIcon from '../SVGIcon.js';

class Search extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value : ""
        }
    }
    onClick = () =>{
        console.log(`Button Clicked | value: ${this.state.value}`);
    }

    onInputChanged = (event) =>{
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <form className={styles.search}>
                    <input 
                        type="text"  
                        value = {this.state.value} 
                        className={styles.search__field} 
                        placeholder={this.props.placeholder}
                        onChange = {this.onInputChanged}
                    />
                    <div 
                        className="btn" 
                        onClick = {() => this.props.onRecipeSearch(this.state.value)}
                    >
                        <SVGIcon name="magnifying-glass" className="search__icon"/>
                        <span>Search</span>
                    </div>
            </form>
        );
    }
}

Search.propTypes ={
    placeholder: propTypes.string,
    value: propTypes.string,
    onRecipeSearch: propTypes.func,
}

Search.defaultProps = {
    placeholder: 'Search over 1,000,000 recipes...',
    value: '',
    onRecipeSearch: () =>{ },
}

export default Search;