import React from 'react';
import '../../index.css';
import SVGIcon from '../SVGIcon';

class Shopping extends React.Component{
    render(){
        return(
            <div className="shopping">
                <h2 className="heading-2">My Shopping List</h2>
                <ul className="shopping__list">
                    <li className="shopping__item">
                        <div className="shopping__count">
                            <input type="number" defaultValue="500" step="100"/>
                            <p>g</p>
                        </div>
                        <p className="shopping__description">Pasta</p>
                        <button className="shopping__delete btn-tiny">
                            <SVGIcon name={"circle-with-cross"}/>
                        </button>
                    </li>

                    <li className="shopping__item">
                        <div className="shopping__count">
                            <input type="number" defaultValue="0.5" step="0.1"/>
                            <p>cup</p>
                        </div>
                        <p className="shopping__description">Ricotta cheese</p>
                        <button className="shopping__delete btn-tiny">
                            <SVGIcon name={"circle-with-cross"}/>
                        </button>
                    </li>

                    <li className="shopping__item">
                        <div className="shopping__count">
                            <input type="number" defaultValue="3.5" step="0.1"/>
                            <p>tbsp</p>
                        </div>
                        <p className="shopping__description">Toasted almond slices</p>
                        <button className="shopping__delete btn-tiny">
                            <SVGIcon name={"circle-with-cross"}/>
                        </button>
                    </li>

                    <li className="shopping__item">
                        <div className="shopping__count">
                            <input type="number" defaultValue="0.5" step="0.1"/>
                            <p>tbsp</p>
                        </div>
                        <p className="shopping__description">Sea salt</p>
                        <button className="shopping__delete btn-tiny">
                            <SVGIcon name={"circle-with-cross"}/>
                        </button>
                    </li>

                    <li className="shopping__item">
                        <div className="shopping__count">
                            <input type="number" defaultValue="0.25" step="0.1"/>
                            <p>cup</p>
                        </div>

                        <p className="shopping__description">Minced green onions</p>
                        <button className="shopping__delete btn-tiny">
                            <SVGIcon name={"circle-with-cross"}/>
                        </button>
                    </li>

                    <li className="shopping__item">
                        <div className="shopping__count">
                            <input type="number" defaultValue="45" step="10"/>
                            <p>g</p>
                        </div>
                        <p className="shopping__description">Sesame seeds</p>
                        <button className="shopping__delete btn-tiny">
                            <SVGIcon name={"circle-with-cross"}/>
                        </button>
                    </li>
                </ul>
                <div className="copyright">
                    &copy; by Shubham Gupta. Powered by
                    <a href="http://food2fork.com"  className="link">Food2Fork.com</a>.
                </div>
            </div>
    
        );
    }
}

export default Shopping;