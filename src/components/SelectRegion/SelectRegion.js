import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './styles';
import {regions} from '../../config/config'

const SelectRegion = (props) => {
    const classes = useStyles();
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="simple-select-label">Select Region</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={props.region}
            onChange={props.handleChange}
          >
            {regions.map(region=><MenuItem value={"americas"}>{region}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    );
}

export default SelectRegion
