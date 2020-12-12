import React, { forwardRef } from "react";

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { Dialog, List, ListItem, IconButton, Slide } from "@material-ui/core";

import logo from "../../assets/images/rocket.svg";
import apod from "../../assets/images/apod.svg";
import news from "../../assets/images/news.svg";
import menu from '../../assets/images/menu.svg';
import close from '../../assets/images/close.svg';

import styles from "./styles";

import './styles.css';

const {
    AppBar,
    Logo,
    GuideList,
    Guide,
    MenuIcon,
    LogoMenu,
    DialogHeader,
    DrawerButton,
    DialogFull
} = styles;

export default function Header() {
    const [dialog, setDialog] = React.useState(false);
    const location = useLocation();

    const onDialog = () => {
        setDialog(true);
    };
    const offDialog = () => {
        setDialog(false);
    }
    const items = [
        {
            path: "/universe",
            title: "Universe",
            image: "https://hypernova.vercel.app/static/media/home.47abd3ff.svg"
        },
        {
            path: "/news",
            title: "Curiosities",
            image: news
        },
        {
            path: "/apod",
            image: apod,
            title: "Apod"
        },
    ]


    return (
        <AppBar >
            <LogoMenu>
                <Link to="/"><Logo src={logo}></Logo></Link>
            </LogoMenu>
            <Dialog open={dialog} onClose={offDialog} fullScreen>
                <DialogFull>
                    <DialogHeader>
                        <IconButton onClick={offDialog}>
                            <img src={close}/>
                        </IconButton>
                    </DialogHeader>
                    <List>
                        {
                            items.map((item) => (
                                <div key={item.path}>
                                    {
                                        (location.pathname.includes(item.path))
                                            ?
                                            <Link to={item.path}>
                                                <ListItem onClick={offDialog} button style={{ backgroundColor: "#d68000", color: 'white', borderRadius: 7, marginBottom: 5 }} className='item-menu'>
                                                    <img src={item.image} alt={item.title} />
                                                    {item.title}
                                                </ListItem>
                                            </Link>

                                            :
                                            <Link to={item.path}>
                                                <ListItem onClick={offDialog} button style={{ color: 'white', borderRadius: 7, marginBottom: 5}} className='item-menu'>
                                                    <img src={item.image} alt={item.title} />
                                                    {item.title}
                                                </ListItem>
                                            </Link>
                                    }
                                </div>
                            ))
                        }
                    </List>
                </DialogFull>
            </Dialog>
            <DrawerButton>
                <IconButton onClick={onDialog} edge="start" size="medium" aria-label="menu">
                    <MenuIcon src={menu} />
                </IconButton>
            </DrawerButton>
            <Guide>
                <GuideList>
                    {
                        items.map((item) => (
                            <div key={item.path}>
                                {
                                    (location.pathname.includes(item.path))
                                        ?
                                        <Link to={item.path} style={{ backgroundColor: "#EF9906" }} className='link-menu'>
                                            <img src={item.image} alt={item.title} />
                                            {item.title}
                                        </Link>

                                        :
                                        <Link to={item.path} className='link-menu'>
                                            <img src={item.image} alt={item.title} />
                                            {item.title}
                                        </Link>
                                }
                            </div>
                        ))
                    }
                </GuideList>
            </Guide>

        </AppBar >
    )
}
