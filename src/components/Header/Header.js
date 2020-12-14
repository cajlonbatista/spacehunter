import React, { useEffect, useState } from "react";

import { useLocation, Link } from 'react-router-dom';

import { Dialog, List, ListItem, IconButton } from "@material-ui/core";

import logo from "../../assets/images/rocket.svg";
import apod from "../../assets/images/apod.svg";
import news from "../../assets/images/news.svg";
import menu from '../../assets/images/menu.svg';
import dashboard from '../../assets/images/dashboard.svg';
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
    const [dialog, setDialog] = useState(false);
    const [hidden, setHidden] = useState(false);

    const location = useLocation();

    const onDialog = () => {
        setDialog(true);
    };
    const offDialog = () => {
        setDialog(false);
    }
    const handleScroll = () => {
        if (document.documentElement.scrollTop > 330) {
            setHidden(true);
        } else {
            setHidden(false)
        }
    }
    useEffect(() => {
        window.onscroll = () => handleScroll()

    }, []);
    const items = [
        {
            path: "/universe",
            title: "Universe",
            image: dashboard
        },
        {
            path: "/news",
            title: "News",
            image: news
        },
        {
            path: "/apod",
            image: apod,
            title: "Photos"
        },
    ]

    return (
        <AppBar style={{ opacity: (hidden == false ? 1 : 0) }}>
            <LogoMenu>
                <Link to="/"><Logo src={logo}></Logo></Link>
            </LogoMenu>
            <Dialog open={dialog} onClose={offDialog} fullScreen>
                <DialogFull>
                    <DialogHeader>
                        <IconButton onClick={offDialog}>
                            <img src={close} alt='Menu'/>
                        </IconButton>
                    </DialogHeader>
                    <List>
                        {
                            items.map((item) => (
                                <div key={item.path}>
                                    {
                                        (location.pathname.includes(item.path))
                                            ?
                                            <Link to={item.path} style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 400 }}>
                                                <ListItem onClick={offDialog} button style={{ backgroundColor: "#d68000", color: 'white', borderRadius: 7, marginBottom: 5 }} className='item-menu'>
                                                    <img src={item.image} alt={item.title} />
                                                    {item.title}
                                                </ListItem>
                                            </Link>

                                            :
                                            <Link to={item.path} style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 400 }}>
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
                                        <Link to={item.path} style={{ backgroundColor: "#d68000" }} className='link-menu'>
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
