import React from "react";

import "./Mercury.css";
import { Link } from "react-router-dom";
import ArrowLeft from "../../../../assets/images/arrowleft.svg";

export default function Mercury() {
    return (
        <div>
            <div className="headerMercury">
                <Link className="backMercury" to="universe/solarsystem/">
                    <img src={ArrowLeft} alt="" />
                </Link>
                <div className="contentMercury">
                    <h2>Mercury</h2>
                </div>
            </div>
        </div>
    );
}