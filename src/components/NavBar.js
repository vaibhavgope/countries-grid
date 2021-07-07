import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold'
    },
    bar: {
        backgroundColor: 'white',
        color: theme.palette.text.primary,
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

const NavBar = () => {
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
                    <Button color="inherit">Dark mode</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar
