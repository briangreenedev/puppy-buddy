import React from 'react';
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemSecondaryAction
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ItemMenuIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from "@material-ui/core/styles";
import DueDate from "../due-date";
import PuppyMenuWithIcon from "../puppy-menu-with-icon";

const useStyles = makeStyles(theme => ({
	secondaryTextContainer: {
		display: 'flex',
		'& > div:nth-of-type(1)': {
			width: '140px'
		},
		'& > div:nth-of-type(2)': {
			width: '250px'
		}
	}
}))

const PuppyList = ({puppies = []}) => {
	const classes = useStyles();
	const menuItems = [
		{
			name: 'Weight',
			handler: (e) => {}
		},
		{
			name: 'Vaccine',
			handler: (e) => {}
		},
		{
			name: 'Medicine',
			handler: (e) => {}
		}
	]
	return (
		<List>
			{
				puppies.map(({name, id, gender, birthDate, lastVaccineDate, nextVaccineDate, sire, dame}) => (
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt={name}
							        src={`/images/puppies/${id}.jpg`} />
						</ListItemAvatar>
						<ListItemText
							primary={name}
							secondary={
								<div className={classes.secondaryTextContainer}>
									<div>
										Gender: {gender} <br/>
										Birth: {birthDate} <br/>
									</div>
									<div>
										Parents: {sire} & {dame} <br/>
										Last Vaccine: {lastVaccineDate} <br/>
										Next Vaccine: <DueDate dueDate={nextVaccineDate} />
									</div>
								</div>
							}
						/>
						<ListItemSecondaryAction>
							<PuppyMenuWithIcon
								puppy={{name, id, gender, birthDate, lastVaccineDate, nextVaccineDate, sire, dame}}
								items={menuItems}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				))
			}
		</List>
	);
};

export default PuppyList;