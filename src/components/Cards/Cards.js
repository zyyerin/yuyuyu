import React from "react";
import { Link, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import './Cards.css';
import { default as Card } from '../Card/Card';
import { default as HICOOL } from '../HICOOL/HICOOL';
import hicool_img from '../../images/HICOOL.jpg';
import baoku_img from '../../images/BAOKU.jpg';
import milvus_img from '../../images/MILVUS.jpg';
import slush_img from '../../images/SLUSH.jpg';

export default class Cards extends React.Component {

    render() {
        const slogan = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
        const slogan2 = "Condimentum diam orci pretium a pharetra.";
        const img_url = "https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/"
        return (
                <div className="cards-container">
                    <div className="card-container">
                        <a href="/project/HICOOL" target="_blank"><Card img={img_url + "hicool2020.jpg"} title="HICOOL" year="2020-2021" location="Beijing" tag="Event" slogan={slogan} slogan2={slogan2}/></a>
                    </div>
                    <div className="card-container">
                        <a href="/project/Milvus" target="_blank"><Card img={img_url + "milvus-conf-2020.jpg"} title="Milvus" year="2020" location="Shanghai,Beijing" tag="Event" slogan={slogan} slogan2={slogan2}/></a>
                    </div>
                    <div className="card-container">
                        <a href="/project/Slush" target="_blank"><Card img={img_url + "slush-sz-19.jpg"} title="Slush China" year="2020" location="Nanjing,Shenzhen,Shanghai" tag="Event" slogan={slogan} slogan2={slogan2}/></a>
                    </div>
                    <div className="card-container">
                        <Card img={img_url + "bkjx.jpg"} title="Baoku Jiangxin" year="2020" location="Shanghai" tag="Exhibition" slogan={slogan} slogan2={slogan2}/>
                    </div>
                    {/* <Router path='/HICOOL' exact component={HICOOL} /> */}
                </div>
        );
    }
}