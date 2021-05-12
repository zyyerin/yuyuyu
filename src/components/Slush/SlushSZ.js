import React from 'react'
import './SlushSZ.css';

export default class SlushSZ extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    Slush Shenzhen 2019
                </div>
                <div className="slush-sz-images">
                    <div className="slush-sz-image"></div>
                    <div className="slush-sz-textbox">
                        <div className="slush-sz-headline">
                            Milvus
                        </div>
                        <div className="slush-sz-context">
                            Milvus is an open-source vector database that is highly flexible, reliable, and blazing fast. It supports adding, deleting, updating, and near real-time search of vectors on a trillion-byte scale.
                        </div>
                        <div className="slush-sz-label">
                            More about Milvus on milvus.io -> 
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}