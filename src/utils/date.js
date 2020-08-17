import moment from 'moment';

const isDateValid = (dateString) => {
	return moment(dateString).isValid()
}

export const dateDifferenceInDays = ({start, end}) => {
	debugger
	if(isDateValid(start) && isDateValid(end)) {
		start = new Date(start);
		end = new Date(end);
		return Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / (1000 * 60 * 60 * 24));
	}
}

export const dateDifferenceInMilliseconds = ({start, end}) => {
	if(isDateValid(start) && isDateValid(end)) {
		start = new Date(start);
		end = new Date(end);
		return Math.floor((Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) / (60 * 60 * 24));
	}
}