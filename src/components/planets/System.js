import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Alert, Drawer, Tooltip, Collapse } from "antd";
import "./System.css";
const { Panel } = Collapse;
const { Text } = Typography;
export default class System extends React.Component {
    constructor() {
        super();
        this.state = {
            mercury: false,
            venus: false,
            earth: false,
            mars: false,
            jupiter: false,
            saturn: false,
            uranus: false,
            neptune: false
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
    onCloseMars = () => {
        this.setState({
            mars: false,
        });
    }
    onShowMars = () => {
        this.setState({
            mars: true,
        })
    }
    onCloseJupiter = () => {
        this.setState({
            jupiter: false,
        });
    }
    onShowJupiter = () => {
        this.setState({
            jupiter: true,
        })
    }
    onCloseSaturn = () => {
        this.setState({
            saturn: false,
        });
    }
    onShowSaturn = () => {
        this.setState({
            saturn: true,
        })
    }
    onCloseUranus = () => {
        this.setState({
            uranus: false,
        });
    }
    onShowUranus = () => {
        this.setState({
            uranus: true,
        })
    }
    onCloseNeptune = () => {
        this.setState({
            neptune: false,
        });
    }
    onShowNeptune = () => {
        this.setState({
            neptune: true,
        })
    }
    render() {
        return (
            <div className="system">

                <div className="system-title">
                    <img src="https://image.flaticon.com/icons/svg/885/885807.svg" width="75px"></img>
                    <h3 className="title">Solar System</h3>
                </div>
                <figure className="wallSystem">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Planets2013-unlabeled.jpg/1024px-Planets2013-unlabeled.jpg" className="map" />
                </figure>
                <Alert
                    className="system-sign"
                    type="warning"
                    message="Why Is It Called The 'Solar' System?"
                    description=" There are many planetary systems like ours in the universe, with planets orbiting a host star. Our planetary system is named the 'solar' system because our Sun is named Sol, after the Latin word for Sun, 'solis,' and anything related to the Sun we call 'solar.'"
                />
                <br></br>
                <br></br>
                <Card title="10 things about the solar system" className="collapse">
                    <Collapse expandIconPosition="right" defaultActiveKey={['1']}>
                        <Panel header="1. ONE OF BILLIONS 🤓" key="1">
                            <p>Our solar system is made up of a star, eight planets and countless smaller bodies such as dwarf planets, asteroids and comets.</p>
                        </Panel>
                        <Panel header="2. MEET ME IN THE ORION ARM 👍" key="2">
                            <p>Our solar system orbits the center of the Milky Way Galaxy at about 515,000 mph (828,000 kph). We’re in one of the galaxy’s four spiral arms.</p>
                        </Panel>
                        <Panel header="3. A LONG WAY ROUND ⌛" key="3">
                            <p>It takes our solar system about 230 million years to complete one orbit around the galactic center.</p>
                        </Panel>
                        <Panel header="4. SPIRALING THROUGH SPACE 🤓" key="4">
                            <p>There are three general kinds of galaxies: elliptical, spiral and irregular. The Milky Way is a spiral galaxy.</p>
                        </Panel>
                        <Panel header="5. GOOD ATMOSPHERE(S) 😍" key="5">
                            <p>Our solar system is a region of space. It has no atmosphere. But it contains many worlds—including Earth—with many kinds of atmospheres..</p>
                        </Panel>
                        <Panel header="6. MANY MOONS 🌑" key="6">
                            <p>The planets of our solar system—and even some asteroids—hold more than 150 moons in their orbits.</p>
                        </Panel>
                        <Panel header="7. RING WORLDS ✨" key="7">
                            <p>The four giant planets—and at least one asteroid—have rings. None are as spectacular as Saturn’s gorgeous rings.</p>
                        </Panel>
                        <Panel header="8. LEAVING THE CRADLE 🐱‍🏍" key="8">
                            <p>More than 300 robotic spacecraft have explored destinations beyond Earth orbit, including 24 astronauts who orbited the moon.</p>
                        </Panel>
                        <Panel header="9. LIFE AS WE KNOW IT 👌" key="9">
                            <p>Our solar system is the only one known to support life. So far, we only know of life on Earth, but we’re looking for more everywhere we can.</p>
                        </Panel>
                        <Panel header="10. FAR-RANGING ROBOTS 🤖" key="10">
                            <p>NASA’s Voyager 1 is the only spacecraft so far to leave our solar system. Four other spacecraft will eventually hit interstellar space..</p>
                        </Panel>
                    </Collapse>
                </Card>
                <div className="titlePlanets">
                    <img src="https://image.flaticon.com/icons/svg/1124/1124460.svg" />
                    <h2><i>Come travel through the solar system</i></h2>
                </div>
                <div className="planets">
                    <Tooltip title="Come visit me! with a click">
                        <div onClick={this.onShowMercury} className="mary">
                            <img src="https://image.flaticon.com/icons/svg/2590/2590482.svg" width="50px"></img>
                            Mercury
                        </div>
                    </Tooltip>
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
                            <strong>Day duration:</strong> 58d 15h 30m <br />
                            <strong>Orbital period:</strong> 88 days <br />
                            <strong>Radius:</strong> 2,439.7 km <br />
                            <strong>Gravity: </strong>3.7 m / s² <br />
                            <strong>Mass: </strong>3,285 × 10 ^ 23 kg <br />
                            <strong>Planet Type:</strong> Terrestrial<br />
                        </div>
                        <Link className="more" to="/universe/solarsystem/mercury">More</Link>
                    </Drawer>
                    <Tooltip title="Come visit me! with a click">

                        <div onClick={this.onShowVenus} className="mary">
                            <img src="https://image.flaticon.com/icons/svg/361/361756.svg" width="50px" />
                            Venus
                    </div>
                    </Tooltip>
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
                            <strong>Planet Type:</strong> Terrestrial<br />
                            <strong>Orbital period:</strong> 225 days<br></br>
                            <strong>Radius:</strong> 6051,8 km<br></br>
                            <strong>Gravity:</strong> 8,87 m/s²<br></br>
                            <strong>Mass:</strong> 4,867 × 10^24 kg<br></br>
                        </div>
                        <Link className="more" to="/universe/solarsystem/venus">More</Link>
                    </Drawer>
                    <Tooltip title="Come visit me! with a click">

                        <div className="mary" onClick={this.onShowEarth}>
                            <img src="https://image.flaticon.com/icons/svg/2909/2909523.svg" width="50px" />
                            Earth
                        </div>
                    </Tooltip>
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
                            <strong>Day duration:</strong> 58d 15h 30m <br />
                            <strong>Orbital period:</strong> 365,25 days <br />
                            <strong>Radius:</strong> 6371 km <br />
                            <strong>Gravity: </strong> 9,807 m/s² <br />
                            <strong>Mass: </strong> 3,285 × 10 ^ 23 kg <br />
                            <strong>Planet Type:</strong> Terrestrial<br />
                            <strong>Moon: </strong> 1<br></br>
                        </div>
                        <Link className="more" to="/universe/solarsystem/earth">More</Link>
                    </Drawer>
                    <Tooltip title="Come visit me! with a click">

                        <div className="mary" onClick={this.onShowMars}>
                            <img src="https://image.flaticon.com/icons/svg/124/124582.svg" width="50px" />
                            Mars
                        </div>
                    </Tooltip>
                    <Drawer
                        title="Mars"
                        placement="left"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseMars}
                        visible={this.state.mars}
                    >
                        <figure>
                            <img src="https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg" width="100%" />
                            <figcaption>Image of Mars, our next home ?</figcaption>
                        </figure>
                        <div className="status">
                            <strong>Day duration:</strong> 24,6 hours<br />
                            <strong>Orbital period:</strong> 686,971 dias <br />
                            <strong>Equatorial diameter:</strong> 6792,4 km<br />
                            <strong>Gravity: </strong>3,711 m/s²<br />
                            <strong>Mass: </strong>6,4174×1023 kg <br />
                            <strong>Planet Type:</strong> Terrestrial<br />
                            <strong>Moons: </strong> Fobos, Deimos<br></br>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                    <Tooltip title="Come visit me! with a click">
                        <div className="mary" onClick={this.onShowJupiter}>
                            <img src="https://image.flaticon.com/icons/svg/1266/1266581.svg" width="50px" />
                            Jupiter
                    </div>
                    </Tooltip>
                    <Drawer
                        title="Mars"
                        placement="right"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseJupiter}
                        visible={this.state.jupiter}
                    >
                        <figure>
                            <img src="https://solarsystem.nasa.gov/system/resources/detail_files/2486_stsci-h-p1936a_1800.jpg" width="100%" />
                            <figcaption>Hubble's New Portrait of Jupiter</figcaption>
                        </figure>
                        <div className="status">
                            <strong>Atmospheric pressure: </strong>20-200 KPa<br></br>
                            <strong>Orbital period: </strong>4 331,572<br />
                            <strong>Equatorial diameter:</strong> 142 984 ± 8 km<br />
                            <strong>Gravity: </strong>3,711 m/s²<br />
                            <strong>Mass: </strong>318 Earths<br />
                            <strong>Planet Type:</strong> Gas Giant<br />
                            <strong>Moons: </strong>53 confirmed | 26 provisional (79 total)<br></br>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                    <Tooltip title="Come visit me! with a click">
                        <div onClick={this.onShowSaturn} className="mary">
                            <img src="https://image.flaticon.com/icons/svg/2949/2949024.svg" width="50px" />
                        Saturn
                    </div>
                    </Tooltip>
                    <Drawer
                        title="Saturn"
                        placement="left"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseSaturn}
                        visible={this.state.saturn}
                    >
                        <figure>
                            <img src="https://solarsystem.nasa.gov/system/resources/detail_files/2490_stsci-h-p1943a-f_1200.jpg" width="100%" />
                            <figcaption>Saturn's Rings Shine in Hubble Portrait</figcaption>
                        </figure>
                        <div className="status">
                            <strong>Radius: </strong>58232 km<br></br>
                            <strong>Orbital period: </strong>29 years<br />
                            <strong>Surface area: </strong>4,27 × 10^10 km²<br />
                            <strong>Gravity: </strong>10,44 m/s²<br />
                            <strong>Mass: </strong>318 Earths<br />
                            <strong>Planet Type: </strong> Gas Giant<br />
                            <strong>Day: </strong>0d 10h 42m<br></br>
                            <strong>Moons: </strong>53 confirmed | 29 provisional<br></br>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                    <Tooltip title="Come visit me! with a click">
                        <div onClick={this.onShowUranus} className="mary">
                            <img src="https://image.flaticon.com/icons/svg/2531/2531049.svg" width="50px" />
                            Uranus
                    </div >
                    </Tooltip>
                    <Drawer
                        title="Uranus"
                        placement="right"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseUranus}
                        visible={this.state.uranus}
                    >
                        <figure>
                            <img src="https://solarsystem.nasa.gov/system/resources/detail_files/599_PIA18182.jpg" width="100%" />
                            <figcaption>Uranus as seen by NASA's Voyager 2</figcaption>
                        </figure>
                        <div className="status">
                            <strong>Radius: </strong>25362 km<br></br>
                            <strong>Orbital period: </strong>84 years<br />
                            <strong>Surface area: </strong>8,083 × 10^9 km²<br />
                            <strong>Gravity: </strong>8,69 m/s²<br />
                            <strong>Mass: </strong>14,5 Terras<br />
                            <strong>Planet Type: </strong>Ice Giant<br />
                            <strong>Day: </strong>0d 10h 42m<br></br>
                            <strong>Moons: </strong>27<br></br>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                    <Tooltip title="Come visit me! with a click">
                        <div className="mary" onClick={this.onShowNeptune}>
                            <img src="https://image.flaticon.com/icons/svg/1086/1086088.svg" width="40px" />
                            Neptune
                    </div>
                    </Tooltip>
                    <Drawer
                        title="Neptune"
                        placement="right"
                        closable={false}
                        className="planet"
                        onClose={this.onCloseNeptune}
                        visible={this.state.neptune}
                    >
                        <figure>
                            <img src="https://solarsystem.nasa.gov/system/resources/detail_files/611_PIA01492.jpg" width="100%" />
                            <figcaption>Neptune Full Disk View</figcaption>
                        </figure>
                        <div className="status">
                            <strong>Radius: </strong>24622 km<br></br>
                            <strong>Orbital period: </strong>165 years<br />
                            <strong>Surface area: </strong>7,6183×109 km²<br />
                            <strong>Gravity: </strong>	11,15 m/s²<br />
                            <strong>Mass: </strong>1,0243×1026kg<br />
                            <strong>Planet Type: </strong>Ice Giant<br />
                            <strong>Day: </strong>0d 16h<br></br>
                            <strong>Moons: </strong>14<br></br>
                        </div>
                        <Link className="more" to="">More</Link>
                    </Drawer>
                </div>
            </div >
        );
    }
}