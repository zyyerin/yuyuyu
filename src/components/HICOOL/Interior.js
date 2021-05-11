import React from 'react'
import './Interior.css';

export default class Interior extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    Interior
                </div>
                <div className="interior-images">
                    <div className="interior-image1"></div>
                    <div className="interior-image2"></div>
                    <div className="interior-image3"></div>
                    <div className="interior-image4"></div>
                </div>
            </div>
        );
        
    }
}