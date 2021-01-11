import React from 'react';
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemSecondaryAction
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DueDate from "../due-date";
import PuppyMenuWithIcon from "../puppy-menu-with-icon";
import {useHistory} from "react-router-dom";

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
	const history = useHistory();
	const menuItems = [
		{
			name: 'Weight',
			handler: (puppy) => {
				debugger
				history.push({
					pathname: `/puppyweight/${puppy.id}/${puppy.name}`,
					state: puppy
				})
			}
		},
		{
			name: 'Vaccines',
			handler: (e) => {}
		},
		{
			name: 'Home Treatments',
			handler: (e) => {}
		},
		{
			name: 'Photos',
			handler: (e) => {}
		}
	]
	return (
		<List>
			{
				puppies.map(({name, id, gender, birthDate, lastVaccineDate, nextVaccineDate, sire, dame, weightPlots}) => (
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
										<span style={{fontSize:'.8em', opacity:'.4'}}>No weight data</span>
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