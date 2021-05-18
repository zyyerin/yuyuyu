import React from "react";
import './Card.css';
import { ReactComponent as RightArrow } from '../../images/right_arrow.svg';
import $ from 'jquery'
export default class Card extends React.Component {

    render() {
        const img = this.props.img;
        const img_hover = this.props.img_hover;
        const title = this.props.title;
        const year = this.props.year;
        const location = this.props.location;
        const tag = this.props.tag;
        return (
            <div className="card">
                {/* pv view */}
                <img 
                    className="company-image pc-view-card"  
                    src={img} 
                    onMouseOver={(e) => {
                        e.currentTarget.src = img_hover; 
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.src = img; 
                    }}>
                </img>
                <div className="lower-card-container pc-view-card">
                    <div className="company-name-text">
                        {title}
                    </div>
                    <div className="view-project">
                        View Project <RightArrow className="right_arrow"/>
                    </div>
                </div>

                {/* mobile view */}
                <img className="company-image mobile-view-card"  src={img_hover}></img>
                <div className="lower-card-container mobile-view-card">
                    <div className="company-name-text">
                        {title}
                    </div>
                    <div className="intro-container">
                        <div className="intro-text">{year}&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                        <div className="intro-text">{location}&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                        <div className="intro-text"> {tag}</div>
                    </div>
                </div>
            </div>
        );
    }
}