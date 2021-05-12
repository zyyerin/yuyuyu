import React from 'react'
import './SlushTemplate.css';

export default class SlushTemplate extends React.Component {
    render() {
        const subtitle = this.props.subtitle;
        const img1 = this.props.img1;
        const img2 = this.props.img2;
        const img3 = this.props.img3;
        const img4 = this.props.img4;
        const height1 = this.props.height1;
        const height2 = this.props.height2;
        return (
            <div className="module"> 
                <div className="project-subtitle-text"> 
                    {subtitle}
                </div>
                <div className="slush-template-images">
                    <div className="slush-template-image1" style={{backgroundImage: `url(${img1})`, height: `${height1}` }}></div>
                    <div className="slush-template-image2" style={{backgroundImage: `url(${img2})`, height: `${height2}` }}></div>
                    <div className="slush-template-image3" style={{backgroundImage: `url(${img3})` }}></div>
                    <div className="slush-template-image4" style={{backgroundImage: `url(${img4})` }}></div>
                </div>
            </div>
        );
        
    }
}