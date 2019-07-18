import React,{Component} from 'react'
import logo from '../../assets/logo.png'
import SVGIcon from '../SVGIcon.js';
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="header">
                <img src={logo} alt="Logo" className="header__logo"/>
                <form className="search">
                    <input type="text" className="search__field" placeholder="Search over 1,000,000 recipes..."/>
                    <button className="btn search__btn">
                        <SVGIcon name="magnifying-glass" className="search__icon"/>
                        <span>Search</span>
                    </button>
                </form>
                <div className="likes">
                    <div className="likes__field">
                        <SVGIcon name="heart" className="likes__icon" />
                    </div>
                    <div className="likes__panel">
                        <ul className="likes__list">
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

