import React from "react";
import { Carousel, Tooltip } from 'antd';
import "./Carrousel.css";
export default function Carrousel() {
    return (
        <Carousel autoplay >
            <div>
                <Tooltip title="Eagle Nebula’s Pillars of Creation">
                    <img src="https://solarsystem.nasa.gov/system/resources/detail_files/761_heic1501a_detail.jpg"></img>
                </Tooltip>
            </div>
            <div>
                <Tooltip title="Asteroid 10199 Chariklo">
                    <img src="https://solarsystem.nasa.gov/system/content_pages/main_images/411_10199_chariklo_main.jpg" alt="" />
                </Tooltip>
            </div>
            <div>
                <Tooltip title="Comet Neowise">
                    <img src="https://solarsystem.nasa.gov/system/resources/detail_files/2527_208A3495_1280.jpg"></img>
                </Tooltip>
            </div>
        </Carousel>
    )
}