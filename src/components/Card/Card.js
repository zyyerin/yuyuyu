import React from "react";
import './Card.css';

export default class Card extends React.Component {
    render() {
        const img = this.props.img;
        const title = this.props.title;
        const year = this.props.year;
        const location = this.props.location;
        const tag = this.props.tag;
        const slogan = this.props.slogan;
        const slogan2 = this.props.slogan2;
        return (
            <div>
                <div className="company-image" style={{backgroundImage: `url(${img})` }}></div>
                <div className="lower-card-container">
                    <div className="lower-card-left">
                        <div className="company-name-text">
                            {title}
                        </div>
                        <div className="intro-container">
                            <div className="intro-text">{year}&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                            <div className="intro-text">{location}&nbsp;&nbsp;|&nbsp;&nbsp;</div>
                            <div className="intro-text"> {tag}</div>
                        </div>
                    </div>
                    <div className="lower-card-right">
                        <div className="slogan-text">
                            {slogan}
                        </div>
                        <div className="slogan-text">
                            {slogan2}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}