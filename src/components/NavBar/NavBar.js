import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import moonIcon from '../../icons/moon.svg'
import moonIcon1 from '../../icons/moon1.svg'
import useStyles from './styles';

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
                    <Button onClick={props.toggleDarkMode} 
                    className={classes.btn}
                    startIcon={props.darkMode?<img src={moonIcon}/>:<img src={moonIcon1}/>}>Dark mode</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar
