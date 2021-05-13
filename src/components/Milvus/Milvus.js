import React from 'react'
import { Header, Footer, IntroBanner, MilvusAbout, MilvusMascot, MilvusDiagrams, MilvusGifts, MilvusConf } from '../../index.js';
import milvus_img_480 from '../../images/Milvus720x480.png';
import "./Milvus.css";
export default class Milvus extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="Header">
                    <Header />
                    <IntroBanner companyName="Milvus" brief="Milvus is an open-source vector database." img={milvus_img_480}/>
                    <MilvusAbout />
                    <MilvusMascot />
                    <MilvusDiagrams />
                    <MilvusGifts />
                    <MilvusConf />
                    <Footer />
                </div>
            </div>
        );
        
    }
}