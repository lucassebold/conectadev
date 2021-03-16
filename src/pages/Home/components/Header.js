import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from "react-feather";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    AppBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: '1',
    }, 
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    },
});

function Header() {

    const classes = useStyles();

    return (
        <AppBar className={classes.AppBar} color="inherit">
                <Toolbar className="toolbar">
                    <img src="/images/logo.png" alt="logo" className={classes.img}/>
                    <div className={classes.grow}></div>
                    <div className={classes.userSection}>
                        <Button variant="contained" color="primary" className={classes.button}>Novo Post</Button>
                        <SvgIcon className={classes.bell}>
                            <Bell></Bell>
                        </SvgIcon>
                        <Avatar alt="Cindy Baker" src="" />
                    </div>
                    {/* <div>
                        <span>Conecta Dev</span>
                    </div>
                    <div>
                        <span>img1</span>
                        <span>img2</span>
                    </div> */}
                </Toolbar>
            </AppBar>
    );
}

export default Header;