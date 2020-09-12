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

const SomeComponent = withRouter(props => <Header {...props} />);

const { AppBar, Logo, GuideList, Item, Guide, MenuItem, Locality, DropButton } = styles;
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
    drawer: {
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
            path: "/",
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
            <div className="logo-menu">
                <Link to="/"><Logo src={logo}></Logo></Link>
                Space Hunter
            </div>
            <SwipeableDrawer className={classes.drawer} anchor="left" open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose}>
                <List className={classes.list}>
                    <div className="logo-conteiner" onClick={handleDrawerClose} button key="Logo">
                        <img src={logo} className="logo-drawer" alt="" />
                    </div>
                    <div >
                        {
                            items.map((item) => (
                                <ListItem className="list" onClick={handleDrawerClose} button >
                                    <Link to={item.path} className="menu-item">
                                        <img src={item.image} />
                                        <span>{item.title}</span>
                                    </Link>
                                </ListItem>

                            ))
                        }
                    </div>

                </List>

            </SwipeableDrawer>
            <div className="drawer-button" >
                <IconButton onClick={handleDrawerOpen} edge="start" size="medium" color="inherit" aria-label="menu">
                    <img src={menu} className="menu_icon" />
                </IconButton>
            </div>
            <Guide>
                <GuideList>

                    {
                        items.map(item => (
                            <Link className="link-menu" to={item.path}>
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
