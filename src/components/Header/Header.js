import React,{Component} from 'react'
import PropTypes from 'prop-types'; 
import styles from './Header.module.css';
import logo from '../../assets/logo.png'
import Likes from '../Likes/Likes.js'
import Search from '../Search/Search';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className={styles.header}>
                <img src={logo} alt="Logo" className={styles.header__logo}/>
                <Search onRecipeSearch={this.props.onRecipeSearch}/>
                <Likes/>
            </div>
        );
    }
}

Header.propTypes = {
    onRecipeSearch: PropTypes.func,
}

Header.defaultProps = {
    onRecipeSearch: () => {}
}
export default Header;

