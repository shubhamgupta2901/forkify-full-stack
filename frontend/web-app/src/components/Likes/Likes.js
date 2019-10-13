import React from 'react';
import '../../index.css';
import SVGIcon from '../SVGIcon.js';
import Like from './Like';
import * as Utils from '../../utils/Utils';

class Likes extends React.Component{
    renderLikedRecipes = () =>{
        const likes = [];
        for(let i =0; i<2; i++)
            likes.push(<Like key={Utils.generateRandomId()}/>)
        return likes;
    }
    render(){
        return(
            <div className="likes">
                <div className="likes__field">
                    <SVGIcon name="heart" className="likes__icon" />
                </div>
                <div className="likes__panel">
                    <ul className="likes__list">
                        {this.renderLikedRecipes()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Likes;