import React, {useEffect, useReducer, useState} from 'react';
import {
	MenuItem,
	FormControl,
	Select,
	InputLabel, Menu, InputAdornment
} from "@material-ui/core";
import usePuppies from "../../custom-hooks/usePuppies";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridGap: '1em'
	}
}));

const puppyWeightFormReducer = (state, action) => {
	debugger
	switch (action.type) {
	  case 'setPuppy':
	    return {
	      ...state,
	      puppy: action.payload
	    }
		case 'setLb':
			return {
				...state,
				lb: action.payload
			}
		case 'setOz':
			return {
				...state,
				oz: action.payload
			}
		default:
			return state
	}
}

const PuppyWeightForm = ({puppyId}) => {
	const classes = useStyles();
	const puppies = usePuppies();
	const [state, dispatch] = useReducer(puppyWeightFormReducer, {
		puppy: (() => {
			let puppy = {};
			['id'].forEach(k => puppy[k] = undefined)
			return puppy;
		})()
	});

	const {lb, oz} = state;

	return (
		<div className={classes.root}>
			<FormControl>
				<TextField
					label="lb"
					value={lb}
					onChange={e => dispatch({type: 'setLb', payload: e.target.value})} />
			</FormControl>
			<FormControl>
				<TextField
					label="oz"
					value={oz}
					onChange={e => dispatch({type: 'setOz', payload: e.target.value})} />
			</FormControl>
			<div>
				<Button color="primary">Record Weight</Button>
			</div>
		</div>
	);
};

export default PuppyWeightForm;