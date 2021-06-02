import React from 'react'
import { Header, Footer, IntroBanner } from '../../index.js';
import hicool_img_480 from '../../images/HICOOL720x480.png';
import '../styles/projects.css';

export default class baokujiangxin extends React.Component {
    render() {
        return (
            <div className="project">
                <Header />
                <IntroBanner companyName="Baokujiangxin" brief="" img={hicool_img_480}/>
                <Footer />
            </div>
        );
        
    }
}