import React from 'react';
import styles from './Search.module.css';
import SVGIcon from '../SVGIcon.js';

class Search extends React.Component{
    render(){
        return(
            <form className={styles.search}>
                    <input type="text" className={styles.search__field} placeholder="Search over 1,000,000 recipes..."/>
                    <button className="btn search__btn">
                        <SVGIcon name="magnifying-glass" className="search__icon"/>
                        <span>Search</span>
                    </button>
            </form>
        );
    }
}

export default Search;