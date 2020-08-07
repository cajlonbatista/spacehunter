import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";
import ArrowLeft from "../../../../assets/images/arrowleft.svg";

export default function Venus() {
    return (
        <div>
            <div className="headerPlanet">
                <Link className="backPlanet" to="/universe/solarsystem">
                    <img src={ArrowLeft} alt="Voltar" />
                </Link>
                <div className="titlePlanet">
                    <h2>Venus</h2>
                </div>
            </div>
        </div>
    );
}