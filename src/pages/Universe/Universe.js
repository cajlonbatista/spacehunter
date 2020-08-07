import React from "react";
import { Link } from "react-router-dom";
import { SolarSystemLoading } from "react-loadingg";
import "./Universe.css";
export default class Universe extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        }
    }
    componentDidMount() {
        setTimeout(this.none, 1000);
    }
    none = () => {
        this.setState({
            loading: false
        })
    }
    render() {
        if (this.state.loading) {
            return (
                <SolarSystemLoading color="#ffb400" size="larger"></SolarSystemLoading>
            );
        } else {
            return (
                <div className="universe">
                    <Link to="/universe/solarsystem" className="mary" onMouseEnter={this.onImg} onMouseLeave={this.offImg}>
                        <img style={this.state.filter} src="https://image.flaticon.com/icons/svg/885/885807.svg" width="40px"></img>
                        <span>Solar System</span>
                    </Link>
                    <Link className="mary" onMouseEnter={this.onImg} onMouseLeave={this.offImg}>
                        <img style={this.state.filter} src="https://image.flaticon.com/icons/svg/2949/2949023.svg" width="35px"></img>
                        <span>Stars</span>
                    </Link>
                    <Link className="mary">
                        <img src="https://image.flaticon.com/icons/svg/2590/2590225.svg" width="45px"></img>
                        <span>Black Holes</span>
                    </Link>
                    <Link className="mary">
                        <img src="https://image.flaticon.com/icons/svg/947/947674.svg" width="40px"></img>
                        <span>Galaxys</span>
                    </Link>
                    <Link className="mary">
                        <img src="https://image.flaticon.com/icons/svg/2910/2910184.svg" width="40px" />
                        <span>Asteroids</span>
                    </Link>
                    <Link className="mary">
                        <img src="https://image.flaticon.com/icons/svg/3061/3061828.svg" width="40px">
                        </img>
                        <span>Constellations</span>
                    </Link>
                    <Link className="mary">
                        <img src="https://image.flaticon.com/icons/svg/1396/1396329.svg" width="40px"></img>
                        <span>Exoplanets</span>
                    </Link>
                </div>
            );
        }
    }
}