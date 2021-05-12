import React from 'react'
import './MilvusMascot.css';

export default class MilvusMascot extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    Mascot
                </div>
                <div className="milvus-mascot-images">
                    <div className="milvus-mascot-image"></div>
                    <div className="milvus-mascot-textbox">
                        <div className="milvus-mascot-headline">
                            Milvus
                        </div>
                        <div className="milvus-mascot-context">
                            Milvus is an open-source vector database that is highly flexible, reliable, and blazing fast. It supports adding, deleting, updating, and near real-time search of vectors on a trillion-byte scale.
                        </div>
                        <div className="milvus-mascot-label">
                            More mascot Milvus on milvus.io -> 
                        </div>
                    </div>
                    <div className="milvus-mascot-image2"></div>
                    <div className="milvus-mascot-image3"></div>
                    <div className="milvus-mascot-image4"></div>
                    <div className="milvus-mascot-image5"></div>
                    <div className="milvus-mascot-image6"></div>
                </div>
            </div>
        );
        
    }
}