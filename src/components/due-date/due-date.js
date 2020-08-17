import React from 'react';
import {dateDifferenceInDays} from '../../utils/date';
import {Chip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'inline-block',
		'& div.MuiChip-root': {
			height: '22px'
		}
	}
}))

const DueDate = ({dueDate}) => {
	debugger
	const daysUntilDue = dateDifferenceInDays({
		start: new Date(),
		end: dueDate
	});
	const daysText = daysUntilDue === 1 ? 'day' : 'days';
	debugger
	const classes = useStyles();
	return <div className={classes.root}>
		{
			daysUntilDue < 0
				? <Chip label={`${daysUntilDue * -1} ${daysText} overdue`} color="secondary" />
				: daysUntilDue === 0
				? <Chip label="Due today" color="secondary" />
				: daysUntilDue < 8
				? <Chip label={`Due in ${daysUntilDue} ${daysText}`} color="primary"  />
				: <Chip label={dueDate} />
		}
	</div>
};

export default DueDate;