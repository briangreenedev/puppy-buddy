import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	logoBlock: {
		backgroundColor: theme.palette.primary.main,
		padding: '0px 7px 12px 7px',
		marginBottom: '-18px',
		marginRight: '10px',
		boxShadow: '0 0 7px #232323',
		width: '80px',
		height: '70px',
		'& > img': {
			width: '100%'
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