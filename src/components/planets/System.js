import React from "react";
import { Link } from "react-router-dom";
import { Layout, Typography, Spin, Drawer } from "antd";
import "./System.css";
const { Content } = Layout;
const { Text, Title } = Typography;
export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            mercury: false,
            venus: false,
            earth: false,
        }
    }

    onCloseMercury = () => {
        this.setState({
            mercury: false,
        });
    }
    onShowMercury = () => {
        this.setState({
            mercury: true,
        })
    }
    onCloseVenus = () => {
        this.setState({
            venus: false,
        });
    }
    onShowVenus = () => {
        this.setState({
            venus: true,
        })
    }
    onCloseEarth = () => {
        this.setState({
            earth: false,
        });
    }
    onShowEarth = () => {
        this.setState({
            earth: true,
        })
    }
    render() {
        return (
            <div className="system">
                <div className="system-title">
                    <img src="https://image.flaticon.com/icons/svg/885/885807.svg" width="75px"></img>
                    <h3 className="title">Solar System</h3>
                </div>
                <div className="planets">
                    <div title="Come visit me! with a click" onClick={this.onShowMercury} className="mary">
                        <img src="https://image.flaticon.com/icons/svg/2590/2590482.svg" width="50px"></img>
                            Mercury
                        </div>
                    <Drawer
                        title="Mercury"
                        placement="right"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseMercury}
                        visible={this.state.mercury}
                    >
                        <figure>
                            <img src="http://s2.glbimg.com/BgWxSZbymvV_HhJaGOTQqMWHGZn2-TkZ9LdOdYB9vrBIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2013/02/21/mercurio.jpg" width="100%" />
                            <figcaption>Color image of the first planet Mercury released by NASA (Photo: NASA / AFP)</figcaption>
                        </figure>
                        <div className="status">
                            <strong>Day duration:</strong> 58d 15h 30m <br/>
                            <strong>Orbital period:</strong> 88 days <br/>
                            <strong>Radius:</strong> 2,439.7 km <br/>
                            <strong>Gravity: </strong>3.7 m / s² <br/>
                            <strong>Mass: </strong>3,285 × 10 ^ 23 kg <br/>
                            <strong>Planet Type:</strong> Terrestrial<br/>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                    <div onClick={this.onShowVenus} title="Come visit me! with a click" className="mary">
                        <img src="https://image.flaticon.com/icons/svg/361/361756.svg" width="50px" />
                            Venus
                    </div>
                    <Drawer
                        title="Venus"
                        placement="left"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseVenus}
                        visible={this.state.venus}
                    >
                        <figure>
                            <img src="https://solarsystem.nasa.gov/system/resources/detail_files/775_PIA00271_detail.jpg" width="100%" />
                            <figcaption>Venus - Computer Simulated Global View of the Northern Hemisphere</figcaption>
                        </figure>
                        <div className="status">
                            <strong>Day duration:</strong> 116d 18h 0m<br></br>
                            <strong>Planet Type:</strong> Terrestrial<br/>
                            <strong>Orbital period:</strong> 225 days<br></br>
                            <strong>Radius:</strong> 6.051,8 km<br></br>
                            <strong>Gravity:</strong> 8,87 m/s²<br></br>
                            <strong>Mass:</strong> 4,867 × 10^24 kg<br></br>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                    <div title="Come visit me! with a click" className="mary" onClick={this.onShowEarth}>
                        <img src="https://image.flaticon.com/icons/svg/2909/2909523.svg" width="50px" />
                            Earth
                        </div>
                        <Drawer
                        title="Earth"
                        placement="right"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseEarth}
                        visible={this.state.earth}
                    >
                        <figure>
                            <img src="https://www.ccvalg.pt/astronomia/sistema_solar/terra/globe_east_full.jpg" width="100%" />
                            <figcaption>Image of Earth, our home </figcaption>
                        </figure>
                        <div className="status">
                            <strong>Day duration:</strong> 58d 15h 30m <br/>
                            <strong>Orbital period:</strong> 365,25 days <br/>
                            <strong>Radius:</strong> 6.371 km <br/>
                            <strong>Gravity: </strong> 9,807 m/s² <br/>
                            <strong>Mass: </strong> 3,285 × 10 ^ 23 kg <br/>
                            <strong>Planet Type:</strong> Terrestrial<br/>
                            <strong>Moon: </strong> 1<br></br>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                    <div title="Come visit me! with a click" className="mary">
                        <img src="https://image.flaticon.com/icons/svg/124/124582.svg" width="50px" />
                            Marte
                        </div>
                    <div title="Come visit me! with a click" className="mary">
                        <img src="https://image.flaticon.com/icons/svg/1266/1266581.svg" width="50px" />
                            Júpiter
                        </div>
                    <div title="Come visit me! with a click" className="mary">
                        <img src="https://image.flaticon.com/icons/svg/2949/2949024.svg" width="50px" />
                            Saturno
                        </div>
                    <div title="Come visit me! with a click" className="mary">
                        <img src="https://image.flaticon.com/icons/svg/2531/2531049.svg" width="50px" />
                            Urano
                        </div >
                    <div title="Come visit me! with a click" className="mary">
                        <img src="https://image.flaticon.com/icons/svg/1086/1086088.svg" width="40px" />
                            Netuno
                        </div>
                </div>
            </div>
        );
    }
}