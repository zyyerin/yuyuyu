import React from "react";
import './Cards.css';
import { default as Card } from '../Card/Card';
import hicool_img from '../../images/HICOOL.jpg';
import baoku_img from '../../images/BAOKU.jpg';
import milvus_img from '../../images/MILVUS.jpg';
import slush_img from '../../images/SLUSH.jpg';

export default class Cards extends React.Component {
    render() {
        const slogan = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
        const slogan2 = "Condimentum diam orci pretium a pharetra.";
        return (
            <div className="cards-container">
                <div>
                    <Card img={hicool_img} title="HICOOL" year="2020-2021" location="Beijing" tag="Event" slogan={slogan} slogan2={slogan2}/>
                </div>
                <div>
                    <Card img={milvus_img} title="Milvus" year="2020" location="Shanghai,Beijing" tag="Event" slogan={slogan} slogan2={slogan2}/>
                </div>
                <div>
                    <Card img={slush_img} title="Slush China" year="2020" location="Nanjing, Shenzhen, Shanghai" tag="Event" slogan={slogan} slogan2={slogan2}/>
                </div>
                <div>
                    <Card img={baoku_img} title="Baoku Jiangxin" year="2020" location="Shanghai" tag="Exhibition" slogan={slogan} slogan2={slogan2}/>
                </div>
            </div>
        );
    }
}