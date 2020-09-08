import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

import "./styles.css";
import styles from "./styles";
import logo from "../../assets/logo.png";

import { InboxSharp, ContactSupport, BookOutlined, BookSharp } from "@material-ui/icons";

const { AppBar, Logo, GuideList, Item, Guide, MenuItem, Locality, DropButton } = styles;
const useStyles = makeStyles({
    list: {
        width: 250,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffdd00",
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
    }
});
export default function Header() {
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
            <a href="#"><Logo src={logo}></Logo></a>
            <SwipeableDrawer className={classes.drawer} anchor="left" open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose}>
                <List className={classes.list}>
                    <div className="logoConteiner" onClick={handleDrawerClose} button key="Logo">
                        <img src={logo} className="logoDrawer" alt="" />
                    </div>
                    <div>
                        <ListItem onClick={handleDrawerClose} button key="Sobre">
                            <InboxSharp className="iconDrawer" />
                            <ListItemText primary="Sobre" />
                        </ListItem>
                        <ListItem onClick={handleDrawerClose} button key="Graduação">
                            <BookOutlined className="iconDrawer" />
                            <ListItemText primary="Graduação" />
                        </ListItem>
                        <ListItem onClick={handleDrawerClose} button key="Pós-Graduação">
                            <BookSharp className="iconDrawer" />
                            <ListItemText primary="Pós-Graduação" />
                        </ListItem>
                        <ListItem onClick={handleDrawerClose} button key="Contato">
                            <ContactSupport className="iconDrawer" />
                            <ListItemText primary="Contato" />
                        </ListItem>
                    </div>
                    <div className="locality">
                        <Locality>
                            R. Manoel Gonçalves, 671 - Piquizeiro  Caxias - MA, 65600-110
                        </Locality>
                    </div>
                </List>

            </SwipeableDrawer>
            <div className="drawerButton" >
                <IconButton onClick={handleDrawerOpen} edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
            </div>
            <Guide>
                <Locality>
                    R. Manoel Gonçalves, 671 - Piquizeiro, Caxias - MA, 65600-110
                </Locality>
                <GuideList>
                    <Item href="#">
                        <li>Sobre</li>
                    </Item>
                    <Item href="#" >
                        <li>Graduação</li>
                    </Item>
                    <Item href="#">
                        <li>Pós-Graduação</li>
                    </Item>
                    <Item href="#">
                        <li>Contato</li>
                    </Item>
                </GuideList>
            </Guide>
        </AppBar>
    )

}
