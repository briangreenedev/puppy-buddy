import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	left: {
		marginLeft: theme.spacing(15)
	},
	right: {
	}
}))

const ToolbarSection = ({side = 'left', children}) => {
	const classes = useStyles();
	return (
		<div className={classes[side]}>
			{children}
		</div>

	);
};

export default ToolbarSection;