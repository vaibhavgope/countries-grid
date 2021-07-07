import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchBar from './SearchBar';
import { Link, withRouter } from "react-router-dom";
import SelectRegion from './SelectRegion';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 100,
        position: 'relative',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.primary,
        marginTop: 30,
        minHeight: '100%',
    },
    flag: {
        minWidth: '90%',
        maxWidth: '100%',
        objectFit: 'cover',
        maxHeight: '180px'
    },
}));

function FlagGrid() {
    const classes = useStyles();
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [region, setRegion] = useState('')

    const handleSearch = (e) => {
        setQuery(e.target.value)
        searchCountries(query)
    }

    const handleRegionChange = (e) => {
        setRegion(e.target.value)
        fetch(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
            .then(resp => resp.json())
            .then(resp => setData(resp))
            .catch(e => console.log(e))
        setRegion(e.target.value)
    }

    const searchCountries = (text) => {
        fetch(`https://restcountries.eu/rest/v2/name/${text}`)
            .then(resp => resp.json())
            .then(resp => setData(resp))
            .catch(e => console.log(e))
    }
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(resp => resp.json())
            .then(resp => setData(resp))
            .catch(e => console.log(e));
    }, [])
    return (
        <div className={classes.root}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <SearchBar handleSearch={handleSearch} query={query} />
                <div></div>
                <SelectRegion region={region} handleChange={handleRegionChange} />
            </div>
            <Grid container spacing={3}>
                {data.length > 0 ?
                    data.map((country) => {
                        return <Grid item xs={6} sm={3}>
                            <Link to={`/countries/${country.alpha3Code}`} style={{ textDecoration: 'none' }}>
                                <Paper className={classes.paper}>
                                    <img src={country.flag} alt="" className={classes.flag} />
                                    <div>
                                        <div style={{ fontWeight: 'bold' }}>{country.name}</div>
                                        <div>Population: {country.population}</div>
                                        <div>Region: {country.region}</div>
                                        <div>Capital: {country.capital}</div>
                                    </div>
                                </Paper>
                            </Link>
                        </Grid>
                    })
                    : "Loading..."}
            </Grid>
        </div>
    );
}
export default withRouter(FlagGrid)