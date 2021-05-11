import React from 'react'
import { Header, Footer, IntroBanner, Exterior, Interior, Stage, Exhibition, OnlinePromotionAssets } from '../../index.js';
import hicool_img_480 from '../../images/HICOOL720x480.png';
import "./HICOOL.css";
export default class HICOOL extends React.Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <Header />
                    <IntroBanner companyName="HICOOL" brief="Event branding for HICOOL 2020." img={hicool_img_480}/>
                    <Exterior />
                    <Interior/>
                    <Stage />
                    <Exhibition />
                    <OnlinePromotionAssets />
                    <Footer />
                </div>
            </div>
        );
        
    }
}