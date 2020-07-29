import React from "react";
import rocket from "../rocket.svg";
import { Link } from "react-router-dom";

import { Layout, Typography, Spin, Drawer} from "antd";
import "./System.css";
const { Content } = Layout;
const { Text, Title } = Typography;
export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            color: [
                "#515ec0",
                "#ff5d5d",
                "#ff835d",
                "#fcff5d",
                "#62ff5d",
                "#605dff",
                "#5dfff7"
            ],
            mercury: false,
            loader: true
        }
    }
    componentDidMount() {
        setTimeout(this.loading, 2000)
    }
    loading = () => {
        this.setState({
            loader: false
        })


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
    render() {
        if (this.state.loader) {
            return (
                <div className="loading">
                    <div className="logo">
                        <img src={rocket} width="200px" />
                    </div>
                    <Spin tip="Loading..." size="large">

                    </Spin>
                </div>
            );
        } else {
            return (
                <div className="system">
                    <div className="system-title">
                        <img src="https://image.flaticon.com/icons/svg/3081/3081695.svg" width="50px"></img>
                        <h3 className="title"><i>Planets of Solar System</i></h3>
                    </div>
                    <div className="planets">
                        <div onClick={this.onShowMercury}>
                            <img src="https://image.flaticon.com/icons/svg/2590/2590482.svg" width="50px"></img>
                            Mercúrio
                        </div>
                        <Drawer
                            title="Mercury"
                            placement="right"
                            closable={false}
                            className="mercury"
                            onClose={this.onCloseMercury}
                            visible={this.state.mercury}
                        >
                            <figure>
                                <img src="http://s2.glbimg.com/BgWxSZbymvV_HhJaGOTQqMWHGZn2-TkZ9LdOdYB9vrBIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2013/02/21/mercurio.jpg" width="100%" />
                                <figcaption>Imagem colorida do planeta Mercúrio divulgada pela Nasa (Foto: Nasa/AFP)
                                </figcaption>
                            </figure>
                            <Text type="secondary">Áreas marcadas em azul escuro indicam um fenômeno geológico na crosta do planeta que é rico em um mineral escuro e opaco. Já as regiões da cor marrom indicam planícies formadas pela erupção de lava.
                            A sonda Messenger foi a primeira nave a realizar o feito de acompanhar a órbita de Mercúrio. Desde então, ela já enviou mais de 88 mil imagens para a agência espacial.
                            </Text><br /><br />
                            <Link className="more" to="">More</Link>
                        </Drawer>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/361/361756.svg" width="50px" />
                            Vênus
                        </div>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/2909/2909523.svg" width="50px" />
                            Terra
                        </div>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/124/124582.svg" width="50px" />
                            Marte
                        </div>
                        <div >
                            <img src="https://image.flaticon.com/icons/svg/1266/1266581.svg" width="50px" />
                            Júpiter
                        </div>
                        <div >
                            <img src="https://image.flaticon.com/icons/svg/2949/2949024.svg" width="50px" />
                            Saturno
                        </div>
                        <div >
                            <img src="https://image.flaticon.com/icons/svg/2531/2531049.svg" width="50px" />
                            Urano
                        </div >
                        <div >
                            <img src="https://image.flaticon.com/icons/svg/1086/1086088.svg" width="40px" />
                            Netuno
                        </div>
                    </div>
                </div>
            );
        }

    }
}