import React from "react";
import './Card.css';

export default class Card extends React.Component {
    render() {
        const img = this.props.img;
        const title = this.props.title;
        const year = this.props.year;
        const location = this.props.location;
        const tag = this.props.tag;
        return (
            <div>
                <div className="company-image" style={{backgroundImage: `url(${img})` }}></div>
                {/* pv view */}
                <div className="lower-card-container pc-view-card">
                    <div className="company-name-text">
                        {title}
                    </div>
                    <div className="view-project">
                        View Project ->
                    </div>
                </div>

                {/* mobile view */}
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