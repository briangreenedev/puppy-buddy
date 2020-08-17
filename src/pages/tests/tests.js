import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {
	makeStyles
} from "@material-ui/core";
import PuppyList from "../../components/puppy-list";
import usePuppies from "../../custom-hooks/usePuppies";

const useStyles = makeStyles(theme => ({
	root: {
		'& h2': {
			paddingLeft: '25px'
		}
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}
}));

const Tests = ({setTitle}) => {
	const classes = useStyles();
	setTitle('Testing My Components');
	const [puppies] = usePuppies([]);
	return (
		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<h2>Puppies</h2>
				<PuppyList puppies={puppies} />
			</Grid>
		</Grid>
	);
};

export default Tests;