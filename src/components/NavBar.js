import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        color: theme.palette.text.primary,
    },
    bar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const NavBar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.bar}>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Typography variant="h6" className={classes.title}>
                            Where in the world?
                        </Typography>
                    </Link>
                    <Switch checked={props.darkMode} icon={<WbSunnyIcon style={{ fill: 'orange' }} />} checkedIcon={<Brightness3Icon style={{ fill: 'white' }} />} onChange={props.toggleDarkMode} color='secondary' />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar
