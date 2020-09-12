import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import menu from '../../assets/images/menu.svg';

import "./styles.css";
import styles from "./styles";
import logo from "../../assets/images/rocket.svg";

import { withRouter } from 'react-router-dom';

const SomeComponent = withRouter(props => <Header {...props} />); //Get props path the of routes

const {
    AppBar,
    Logo,
    GuideList,
    Guide,
    MenuIcon,
    LogoMenu,
    LogoConteiner,
    DrawerButton,
    LogoDrawer,
} = styles;

const useStyles = makeStyles({
    list: {
        width: 270,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#181818",
    },
    fullList: {
        width: 'auto',
    },
});

export default function Header(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const items = [
        {
            path: "/universe",
            title: "Universo",
            image: "https://image.flaticon.com/icons/svg/3049/3049498.svg"
        },
        {
            path: "/news",
            title: "News",
            image: "https://image.flaticon.com/icons/svg/2991/2991408.svg"
        },
        {
            path: "/apod",
            image: "https://www.flaticon.com/svg/static/icons/svg/3004/3004721.svg",
            title: "Apod"
        },
        {
            path: "/hovers",
            image: "https://www.flaticon.com/svg/static/icons/svg/1006/1006195.svg",
            title: "Mars Hover",
        },
        {
            path: "/multimedia",
            image: "https://image.flaticon.com/icons/svg/1055/1055662.svg",
            title: "Multimedia"
        }
    ]

    return (
        <AppBar >
            <LogoMenu>
                <Link to="/"><Logo src={logo}></Logo></Link>
                Space Hunter
            </LogoMenu>
            <SwipeableDrawer className={classes.drawer} anchor="left" open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose}>
                <List className={classes.list}>
                    <LogoConteiner onClick={handleDrawerClose} button key="Logo">
                        <LogoDrawer src={logo} />
                    </LogoConteiner>
                    <div>
                        {
                            items.map((item) => (
                                <ListItem className="list" onClick={handleDrawerClose} button >
                                    <Link to={item.path} className="item-menu">
                                        <img src={item.image} />
                                        {item.title}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </div>
                </List>
            </SwipeableDrawer>
            <DrawerButton>
                <IconButton onClick={handleDrawerOpen} edge="start" size="medium" color="inherit" aria-label="menu">
                    <MenuIcon src={menu} />
                </IconButton>
            </DrawerButton>
            <Guide>
                <GuideList>
                    {
                        items.map(item => (
                                <Link to={item.path} className="link-menu">
                                    <img src={item.image} />
                                    {item.title}
                                </Link>
                        ))
                    }
                </GuideList>
            </Guide>
        </AppBar >
    )
}
