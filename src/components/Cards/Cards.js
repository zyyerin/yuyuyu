import React from "react";
import { Link, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import './Cards.css';
import { default as Card } from '../Card/Card';
import hicool_img from '../../images/cover_hicool2020_bnw.jpg';
import milvus_img from '../../images/cover_milvus_bnw.jpg';
import slush_img from '../../images/cover_slush-sz19_bnw.jpg';
import bkjx_img from '../../images/cover_bkjx_bnw.jpg';
export default class Cards extends React.Component {

    render() {
        const img_url = "https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/"
        return (
                <div className="cards-container">
                    <div className="card-container">
                        <Link to="/project/HICOOL"><Card img_hover={img_url + "hicool2020.jpg"} img={hicool_img} title="HICOOL 2020" year="2020-2021" location="Beijing" tag="Event" /></Link>
                    </div>
                    <div className="card-container">
                        <Link to="/project/Milvus"><Card img_hover={img_url + "milvus-conf-2020.jpg"} img={milvus_img} title="Milvus" year="2020" location="Shanghai,Beijing" tag="Event" /></Link>
                    </div>
                    <div className="card-container">
                        <Link to="/project/Slush"><Card img_hover={img_url + "slush-sz19.jpg"} img={slush_img} title="Slush China" year="2020" location="Nanjing,Shenzhen,Shanghai" tag="Event" /></Link>
                    </div>
                    <div className="card-container">
                        <Card img_hover={img_url + "bkjx.jpg"} title="Baoku Jiangxin" img={bkjx_img} year="2020" location="Shanghai" tag="Exhibition" />
                    </div>
                    {/* <Router path='/HICOOL' exact component={HICOOL} /> */}
                </div>
        );
    }
}