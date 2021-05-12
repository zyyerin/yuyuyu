import React from 'react'
import './SlushExterior.css';

export default class SlushExterior extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    Exterior
                </div>
                <div className="slush-exterior-images">
                    <div className="slush-exterior-image1"></div>
                    <div className="slush-exterior-image2"></div>
                    <div className="slush-exterior-image3"></div>
                    <div className="slush-exterior-image4"></div>
                </div>
            </div>
        );
        
    }
}