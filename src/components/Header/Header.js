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

import { InboxSharp, ContactSupport, BookOutlined, BookSharp } from "@material-ui/icons";
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


    return (
        <AppBar >
            <div className="logoW">
                <Link to="/"><Logo src={logo}></Logo></Link>
                Space Hunter
            </div>
            <SwipeableDrawer className={classes.drawer} anchor="left" open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose}>
                <List className={classes.list}>
                    <div className="logoConteiner" onClick={handleDrawerClose} button key="Logo">
                        <img src={logo} className="logoDrawer" alt="" />
                    </div>
                    <div className="list">
                        <ListItem onClick={handleDrawerClose} button >
                            <div className="list-item">
                                <img src="https://image.flaticon.com/icons/svg/3049/3049498.svg" />
                                <span>Universo</span>
                            </div>
                        </ListItem>
                    </div>
                </List>

            </SwipeableDrawer>
            <div className="drawerButton" >
                <IconButton onClick={handleDrawerOpen} edge="start" size="medium" color="inherit" aria-label="menu">
                    <img src={menu} className="menu_icon" />
                </IconButton>
            </div>
            <Guide>
                <GuideList>
                    <Link className="linkMenu" to="/universe">
                        <img src="https://image.flaticon.com/icons/svg/3049/3049498.svg" />
                        Universe
                    </Link>
                    <Link className="linkMenu" to="/news">
                        <img src="https://image.flaticon.com/icons/svg/2991/2991408.svg" />
                        News
                    </Link>
                    <Link className="linkMenu" to="/apod">
                        <img src="https://image.flaticon.com/icons/svg/3465/3465121.svg" />
                        Apod
                    </Link>
                    <Link className="linkMenu" to="/apod">
                        <img src="https://image.flaticon.com/icons/svg/734/734718.svg" />
                        Mars Hover
                    </Link>
                    <Link className="linkMenu" to="/apod">
                        <img src="https://image.flaticon.com/icons/svg/1055/1055662.svg" />
                        Multimedia
                    </Link>
                    <Link className="linkMenu">
                        <img src="https://image.flaticon.com/icons/svg/3300/3300409.svg" />
                        Contato
                    </Link>
                </GuideList>
            </Guide>
        </AppBar >
    )

}
