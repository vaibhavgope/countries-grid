import React, { useState, useEffect } from "react";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, withRouter } from "react-router-dom";
import useStyles from './styles';
import { routes, BASE_URL, countryDetails } from '../../config/config';
import makeApiCall from '../../utils/makeApiCall';

const CountryPage = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    makeApiCall(BASE_URL + "/alpha/" + props.match.params.code)
      .then((resp) => setData(resp))
      .catch((e) => console.log(e));
  }, [props.match.params.code]);
  return (
    <div className={classes.root}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color='primary'
          style={{ marginBottom: 10 }}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Link>
      {!(
        data &&
        Object.keys(data).length === 0 &&
        (data.constructor === Object) != {}
      ) ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} style={{minHeight: '100%'}}>
            <img src={data.flag} alt="flag" className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6} style={{minHeight: '100%'}}>
            <h1 style={{ fontWeight: 600 }}>{data.name}</h1>
            <Grid container spacing={3}>
              {countryDetails(data).map((e) => {
                return <Grid item xs={12} sm={6}>
                  <span style={{ fontWeight: "bolder" }}>{e.title}</span>{" "}
                  {e.value}
                </Grid>
              })}
            </Grid>
            <div className={classes.neighbours}>
              <h4>Border Countries: </h4>
              {data.borders.map((ele) => {
                return (<Link to={`/countries/${ele}`} style={{ textDecoration: "none" }}>
                  <Button variant='outlined' className={classes.btn}>
                    {ele}
                  </Button>
                </Link>)
              })}
            </div>
          </Grid>
        </Grid>
      ) : (
        <CircularProgress color='inherit' style={{ margin: '20vh auto 0' }} />
      )}
    </div>
  );
};

export default withRouter(CountryPage);
