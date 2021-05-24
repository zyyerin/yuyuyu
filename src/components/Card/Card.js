import React from "react";
import './Card.css';
import { ReactComponent as RightArrow } from '../../images/right_arrow.svg';
export default class Card extends React.Component {

    render() {
        const img = this.props.img;
        const img_hover = this.props.img_hover;
        const title = this.props.title;
        const year = this.props.year;
        const location = this.props.location;
        const tag = this.props.tag;
        return (
            <div className="card">
                <img 
                    alt="Project Cover"
                    className="cover"  
                    src={img} 
                    // onMouseOver={(e) => {
                    //     e.currentTarget.src = img_hover; 
                    // }}
                    // onMouseOut={(e) => {
                    //     e.currentTarget.src = img; 
                    // }}
                    >
                </img>
                <div className="card-info">
                    <h2>
                        {title}
                    </h2>
                    <div className="btn_text">
                        View Project <RightArrow className="right_arrow"/>
                    </div>
                </div>
            </div>
        );
    }
}