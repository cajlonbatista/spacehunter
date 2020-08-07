import React from "react";

import "./styles.css";

import { Link } from "react-router-dom";
import ArrowLeft from "../../../../assets/images/arrowleft.svg";

export default function Mercury() {
    return (
        <div className="planetMercury">
            <div className="headerMercury">
                <Link className="backMercury" to="/universe/solarsystem">
                    <img src={ArrowLeft} alt="Voltar" />
                </Link>
                <div className="titleMercury">
                    <h2>Mercury</h2>
                </div>
            </div>
            <div className="contentMercury">
                <div className="overviewMercury">
                    <p>The Swiftest Planet</p>
                </div>
                <p className="descriptionMercury">From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmospher.</p>
                <div className="tennMercury">
                    <div>
                        <h3>SMALLEST</h3>
                        <p>Mercury is the smallest planet in our solar system—only slightly larger than Earth's Moon. </p>
                    </div>
                    <div>
                        <h3>INSIDER</h3>
                        <p>It is the closest planet to the Sun at a distance of about 36 million miles (58 million kilometers) or 0.39 AU.</p>
                    </div>
                    <div>
                        <h3>LONG DAYS, SHORT YEARS</h3>
                        <p>One day on Mercury (the time it takes for Mercury to rotate or spin once with respect to the stars) takes 59 Earth days. One day-night cycle on Mercury takes 175.97 Earth days. Mercury makes a complete orbit around the Sun (a year in Mercury time) in just 88 Earth days.</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}