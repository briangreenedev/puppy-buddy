import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	logoBlock: {
		backgroundColor: theme.palette.primary.main,
		position: 'fixed',
		left: theme.spacing(10),
		padding: '17px 10px 0px 10px',
		boxShadow: '0 0 7px #232323',
		'& > img': {
			height: theme.spacing(10)
		}
	},
}));

const Logo = () => {
	const classes = useStyles();
	return (
		<div className={classes.logoBlock}>
			<img src="logo-white-transparent.png" />
		</div>
	);
};

export default Logo;