import React from "react";
import { Link, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import './Cards.css';
import { default as Card } from '../Card/Card';
import slush_img from '../../images/SLUSH.jpg';
export default class Cards extends React.Component {

    render() {
        const img_url = "https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/"
        return (
                <div className="cards-container">
                    <div className="card-container">
                        <Link to="/project/HICOOL"><Card img={img_url + "hicool2020.jpg"} title="HICOOL 2020" year="2020-2021" location="Beijing" tag="Event"/></Link>
                    </div>
                    <div className="card-container">
                        <Link to="/project/Milvus"><Card img={img_url + "milvus-conf-2020.jpg"} title="Milvus" year="2020" location="Shanghai,Beijing" tag="Event"/></Link>
                    </div>
                    <div className="card-container">
                        <Link to="/project/Slush"><Card img={img_url + "slush-sz19.jpg"} title="Slush China" year="2020" location="Nanjing,Shenzhen,Shanghai" tag="Event"/></Link>
                    </div>
                    <div className="card-container">
                        <Card img={img_url + "bkjx.jpg"} title="Baoku Jiangxin" year="2020" location="Shanghai" tag="Exhibition"/>
                    </div>
                    {/* <Router path='/HICOOL' exact component={HICOOL} /> */}
                </div>
        );
    }
}