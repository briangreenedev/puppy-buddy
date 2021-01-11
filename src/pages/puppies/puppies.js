import React from 'react';
import {
	Grid,
	List
} from "@material-ui/core";
import {
	makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	list: {
		width: '100%'
	}
}));

const Puppies = ({setTitle}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container>
				<List className={classes.list}>

				</List>
			</Grid>
		</div>
	);
};

export default Puppies;