import React from 'react'
import './MilvusDiagrams.css';

export default class MilvusDiagrams extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    Diagrams
                </div>
                <div className="milvus-diagrams-images">
                    <div className="milvus-diagrams-image1"></div>
                    <div className="milvus-diagrams-image2"></div>
                    <div className="milvus-diagrams-image3"></div>
                    <div className="milvus-diagrams-image4"></div>
                </div>
            </div>
        );
        
    }
}