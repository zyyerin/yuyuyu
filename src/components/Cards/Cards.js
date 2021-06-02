import React from "react";
import { Link } from 'react-router-dom'
import { Card } from '../../index.js';
export default class Cards extends React.Component {

    render() {
        const img_url = "https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/"
        return (
                <div className="cards-container">
                    <div className="card-container">
                        <Link to="/projects/hicool2020"><Card img_hover={img_url + "hicool2020.jpg"} img="https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/hicool2020.jpg" title="HICOOL 2020" year="2020-2021" location="Beijing" tag="Event" /></Link>
                    </div>
                    <div className="card-container">
                        <Link to="/projects/Milvus"><Card img_hover={img_url + "milvus-conf-2020.jpg"} img="https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/milvus-conf-2020.jpg" title="Milvus" year="2020" location="Shanghai,Beijing" tag="Event" /></Link>
                    </div>
                    <div className="card-container">
                        <Link to="/projects/Slush"><Card img_hover={img_url + "slush-sz19.jpg"} img="https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/slush-sz19.jpg" title="Slush China" year="2020" location="Nanjing,Shenzhen,Shanghai" tag="Event" /></Link>
                    </div>
                    <div className="card-container">
                        <Link to="/projects/baokujiangxin">
                            <Card img_hover={img_url + "bkjx.jpg"} title="Baoku Jiangxin" img="https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/Covers/bkjx.jpg" year="2020" location="Shanghai" tag="Exhibition" />
                        </Link>
                    </div>
                </div>
        );
    }
}