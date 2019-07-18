import React,{Component} from 'react'
import logo from '../../assets/logo.png'
import SVGIcon from '../SVGIcon.js';
import Likes from '../Likes/Likes.js'
import '../../index.css';

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
                <Likes/>
            </div>
        );
    }
}

export default Header;

