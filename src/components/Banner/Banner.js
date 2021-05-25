import React from "react";
import { Link } from "react-router-dom";
import './Banner.css';

export default class Banner extends React.Component {
    render() {
        return (
            <div>
                <div className="hero">

                    <video id="background-video" loop autoPlay muted={true}>
                      <source src='https://erinzy-1258568418.cos.ap-shanghai.myqcloud.com/yuyuyu-design/projects/may.mp4' type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-content">
                        <h1>Visual design studio based in Shanghai</h1>
                        <p>@Yuyuyu, We believe in the value of design is beyond aethetics. Together with our clients, we create memorable and meaningful experiences for people.</p>
                        <Link to="#"><button className="btn_primary">What we do</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}