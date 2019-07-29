import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../SVGIcon';

const resultPage = (props) =>{
    return(
        <button className={`btn-inline results__btn--${props.type}`} data-goto="1">
            <span>Page {props.page}</span>
            <SVGIcon className="search__icon" name={props.type === 'prev' ? `triangle-left` : `triangle-right`}/>     
        </button>
    );
}

resultPage.propTypes = {
    page: PropTypes.number,
    type: PropTypes.oneOf(['prev', 'next']),
}

resultPage.defaultProps = {
    page: 1,
    type: 'prev'

}

export default resultPage;