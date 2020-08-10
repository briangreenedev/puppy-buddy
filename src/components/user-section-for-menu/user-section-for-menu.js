import React from "react";
import {Avatar} from "@material-ui/core";
import useGetLoggedInUser from "../../custom-hooks/useGetLoggedInUser";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		width:'100%',
		backgroundColor:'#400080',
		color:'white',
		flexDirection:'column',
		fontSize: '.9em',
		boxSizing: 'border-box',
		padding: '11px',
		'& > div:nth-of-type(1)': {
			marginBottom: theme.spacing(2)
		},
		'& > div:nth-of-type(2)': {
			fontWeight: 'bold'
		},
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	}
}));

const UserSectionForMenu = () => {
	const [{firstName, lastName, email, imgUrl}] = useGetLoggedInUser();
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Avatar className={classes.large} alt={`${firstName} ${lastName}`} src={imgUrl} />
			<div>{`${firstName} ${lastName}`}</div>
			<div>{`${email}`}</div>
		</div>
	)
}

export default UserSectionForMenu;