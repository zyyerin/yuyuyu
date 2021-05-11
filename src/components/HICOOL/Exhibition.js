import React from 'react'
import './Exhibition.css';

export default class Exhibition extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    Exhibition
                </div>
                <div className="exhibition-images">
                    <div className="exhibition-image1"></div>
                    <div className="exhibition-image2"></div>
                    <div className="exhibition-image3"></div>
                    <div className="exhibition-image4"></div>
                </div>
            </div>
        );
        
    }
}