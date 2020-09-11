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
                            <Link to="/" className="list-item">
                                <img src="https://image.flaticon.com/icons/svg/3049/3049498.svg" />
                                <span>Universo</span>
                            </Link>
                        </ListItem>
                        <ListItem onClick={handleDrawerClose} button >
                            <Link to="/news" className="list-item">
                                <img src="https://image.flaticon.com/icons/svg/2991/2991408.svg" />
                                <span>News</span>
                            </Link>
                        </ListItem>
                        <ListItem onClick={handleDrawerClose} button >
                            <Link to="/apod" className="list-item">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/3004/3004721.svg" />
                                <span>Apod</span>
                            </Link>
                        </ListItem>
                        <ListItem onClick={handleDrawerClose} button >
                            <Link className="list-item">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/1006/1006195.svg" />
                                <span>Mars Hover</span>
                            </Link>
                        </ListItem>
                        <ListItem onClick={handleDrawerClose} button >
                            <Link className="list-item">
                                <img src="https://image.flaticon.com/icons/svg/1055/1055662.svg" />
                                <span>Multimedia</span>
                            </Link>
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
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3004/3004721.svg" />
                        Apod
                    </Link>
                    <Link className="linkMenu" to="/apod">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1006/1006195.svg" />
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
