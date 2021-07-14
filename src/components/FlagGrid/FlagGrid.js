import React, { useState, useEffect } from 'react';
import { CircularProgress, Grid, Snackbar } from '@material-ui/core';
import SearchBar from '../SearchBar/SearchBar';
import Country from '../Country/Country';
import { withRouter } from "react-router-dom";
import SelectRegion from '../SelectRegion/SelectRegion';
import { routes, BASE_URL } from '../../config/config';
import MuiAlert from '@material-ui/lab/Alert';
import makeApiCall from '../../utils/makeApiCall';
import useStyles from './styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function FlagGrid() {
  const classes = useStyles()
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")
  const [region, setRegion] = useState("")
  const [open, setOpen] = useState(false)

  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchCountries(query);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleRegionChange = async (e) => {
    setRegion(e.target.value);
    makeApiCall(BASE_URL + routes.regionRoute + e.target.value).then(resp => setData(resp))
      .catch(e => setOpen(true))
  };

  const searchCountries = async (text) => {
    makeApiCall(BASE_URL + routes.searchRoute + text).then(resp => setData(resp))
      .catch(e => setOpen(true))
  };

  useEffect(() => {
    makeApiCall(BASE_URL + routes.primaryRoute).then(resp => setData(resp))
      .catch(e => setOpen(true))
  }, []);

  return (
    <div className={classes.root}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SearchBar handleSearch={handleSearch} query={query} />
        <div></div>
        <SelectRegion region={region} handleChange={handleRegionChange} />
      </div>
      <Grid container spacing={8}>
        {data.length > 0
          ? data.map((country) => {
            return (
              <Country country={country} />
            );
          })
          : open ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert severity="error">Sorry not found!</Alert>
                    </Snackbar> : 
                    <CircularProgress color='inherit' style={{ margin: '20vh auto 0' }} />
        }
      </Grid>
    </div>
  );
}
export default withRouter(FlagGrid)