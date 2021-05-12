import React from 'react'
import './MilvusConf.css';

export default class MilvusConf extends React.Component {
    render() {
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    Milvus Community Conf 2020
                </div>
                <div className="milvus-conf-images">
                    <div className="milvus-conf-image1"></div>
                    <div className="milvus-conf-textbox">
                        <div className="milvus-conf-headline">
                            Oct 17th, Beijing
                        </div>
                        <div className="milvus-conf-context">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra.
                        </div>
                        <div className="milvus-conf-label">
                            More -> 
                        </div>
                    </div>
                    <div className="milvus-conf-image2"></div>
                    <div className="milvus-conf-image3"></div>
                    <div className="milvus-conf-image4"></div>
                    <div className="milvus-conf-image5"></div>
                    <div className="milvus-conf-image6"></div>
                </div>
            </div>
        );
        
    }
}