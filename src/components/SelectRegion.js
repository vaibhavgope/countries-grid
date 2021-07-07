import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        position: 'relative'
    }
}));

const SelectRegion = (props) => {
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="simple-select-label">Filter by region</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={props.region}
                    onChange={props.handleChange}
                >
                    <MenuItem value={'americas'}>Americas</MenuItem>
                    <MenuItem value={'africa'}>Africa</MenuItem>
                    <MenuItem value={'asia'}>Asia</MenuItem>
                    <MenuItem value={'europe'}>Europe</MenuItem>
                    <MenuItem value={'oceania'}>Oceania</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectRegion
