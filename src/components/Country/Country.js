import React from 'react'
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const Country = (props) => {
  const classes = useStyles();
  return (
    <Grid item sm={6} md={3}>
      <Link
        to={`/countries/${props.country.alpha3Code}`}
        style={{ textDecoration: "none" }}
      >
        <Paper className={classes.paper}>
          <img src={props.country.flag} alt="" className={classes.flag} />
          <div className={classes.info}>
            <h3 className={classes.text}>{props.country.name}</h3>
            <div><span className={classes.text}>Population: </span>{props.country.population}</div>
            <div><span className={classes.text}>Region: </span>{props.country.region}</div>
            <div><span className={classes.text}>Capital: </span>{props.country.capital}</div>
          </div>
        </Paper>
      </Link>
    </Grid>
  )
}

export default Country
