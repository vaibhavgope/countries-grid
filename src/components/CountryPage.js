import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    marginLeft: 50,
    position: "relative",
  },
  image: {
    maxWidth: "85%",
    margin: "auto",
  },
}));

const CountryPage = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${props.match.params.code}`)
      .then((resp) => resp.json())
      .then((resp) => setData(resp))
      .catch((e) => console.log(e));
  }, [props.match.params.code]);
  return (
    <div className={classes.root}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          style={{ marginBottom: 10 }}
          startIcon={<ArrowBackIcon />}
        >
          Default
        </Button>
      </Link>
      {!(
        data &&
        Object.keys(data).length === 0 &&
        (data.constructor === Object) != {}
      ) ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img src={data.flag} alt="flag" className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 style={{ fontWeight: 600 }}>{data.name}</h1>
            {/* 
                NOTE: Create an array like below in a config file (src/config/config.js) and loop through that instead of repeating - Remember, DRY!
                ```
                const countryPageDetails = [
                    {
                        title: "Native name:",
                        value: data.nativeName,
                    },
                    {
                        title: "Top level domain:",
                        value: data.topLevelDomain,
                    },
                    
                ];
                ```
             */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Native name:</span>{" "}
                {data.nativeName}
              </Grid>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Top level domain:</span>{" "}
                {data.topLevelDomain}
              </Grid>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Population:</span>{" "}
                {data.population}
              </Grid>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Currencies:</span>{" "}
                {data.currencies.map((e) => e.name).join(",")}
              </Grid>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Region:</span>{" "}
                {data.region}
              </Grid>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Languages:</span>{" "}
                {data.languages.map((e) => e.name).join(",")}
              </Grid>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Sub region:</span>{" "}
                {data.subregion}
              </Grid>
              <Grid item xs={12} sm={6}>
                <span style={{ fontWeight: "bolder" }}>Capital:</span>{" "}
                {data.capital}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default withRouter(CountryPage);
