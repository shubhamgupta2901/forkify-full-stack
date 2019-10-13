import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';

const pageButton = (props) =>{
   
    return(
        <button className={`btn-inline results__btn--${props.type}`} onClick={()=>props.onClick(props.type)}>
            <span>Page {props.page}</span>
            <SVGIcon className="search__icon" name={props.type === 'prev' ? `triangle-left` : `triangle-right`}/>     
        </button>
    );
}

pageButton.propTypes = {
    page: PropTypes.number,
    type: PropTypes.oneOf(['prev', 'next']),
    onClick: PropTypes.func,
}

pageButton.defaultProps = {
    page: 1,
    type: 'prev',
    onClick: () =>{}

}

export default pageButton;