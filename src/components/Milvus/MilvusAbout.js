import React from 'react'
import './MilvusAbout.css';

export default class MilvusAbout extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    About the Product
                </div>
                <div className="milvus-about-images">
                    <div className="milvus-about-image"></div>
                    <div className="milvus-about-textbox">
                        <div className="milvus-about-headline">
                            Milvus
                        </div>
                        <div className="milvus-about-context">
                            Milvus is an open-source vector database that is highly flexible, reliable, and blazing fast. It supports adding, deleting, updating, and near real-time search of vectors on a trillion-byte scale.
                        </div>
                        <div className="milvus-about-label">
                            More about Milvus on milvus.io -> 
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}