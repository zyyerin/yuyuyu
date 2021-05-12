import React from 'react'
import './IntroBanner.css';

export default class IntroBanner extends React.Component {
    render() {
        const companyName = this.props.companyName;
        const brief = this.props.brief;
        const img = this.props.img;
        return (
            <div className="IntroBanner">
                <div className="IntroBanner-title">
                    <div className="companyName">
                        {companyName}
                    </div>
                    <div className="brief">
                        {brief}
                    </div>
                </div>
                <div>
                    <img className="IntroBanner-img" src={img} alt="Slush" />
                </div>
            </div>
        );
        
    }
}