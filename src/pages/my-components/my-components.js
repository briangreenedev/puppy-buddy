import React, {useContext, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {
	makeStyles
} from "@material-ui/core";
import PuppyList from "../../components/puppy-list";
import usePuppies from "../../custom-hooks/usePuppies";
import AddPuppy from "../add-puppy";

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

const MyComponents = () => {
	const classes = useStyles();
	const puppies = usePuppies();

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<AddPuppy/>
			</Grid>
			<Grid item xs={12}>
				<PuppyList puppies={puppies} />
			</Grid>
		</Grid>
	);
};

export default MyComponents;