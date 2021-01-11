import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {
	FormControl,
	TextField,
	Button,
	MenuItem,
	Select,
	InputLabel
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import usePuppies from "../../custom-hooks/usePuppies";

const useStyles = makeStyles(theme => ({
	root: {
		display:'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr 1fr'
		},
		[theme.breakpoints.down('xs')]: {
			gridTemplateColumns: '1fr'
		},
		gridGap: '15px',
	},
	submitContainer: {
		gridColumn: '1 / 4',
		display:'flex',
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			gridColumn: '1 / 3',
		},
		[theme.breakpoints.down('xs')]: {
			gridColumn: '1 / 2',
		}
	}
}))

const AddPuppy = () => {
	var classes = useStyles();

	var [name, setPuppyName] = useState();
	var [color, setColor] = useState();
	var [sire, setSire] = useState();
	var [dame, setDame] = useState();
	var [birthdate, setBirthdate] = useState();
	var [surname, setSurname] = useState();
	var [gender, setGender] = useState();

	const [,savePuppy] = usePuppies();

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<form className={classes.root} noValidate autoComplete="off">
				<FormControl>
					<TextField
						required
						label="Puppy Name"
						value={name}
						onChange={e => setPuppyName(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<TextField
						required
						label="Surname"
						value={surname}
						onChange={e => setSurname(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<InputLabel>Gender *</InputLabel>
					<Select
						required
						value={gender}
						onChange={e => setGender(e.target.value)}
					>
						<MenuItem value="male">Male</MenuItem>
						<MenuItem value="female">Female</MenuItem>
					</Select>
				</FormControl>
				<FormControl>
					<TextField
						required
						label="Color"
						value={color}
						onChange={e => setColor(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<TextField
						required
						label="Sire"
						value={sire}
						onChange={e => setSire(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<TextField
						required
						label="Dame"
						value={dame}
						onChange={e => setDame(e.target.value)}
					/>
				</FormControl>
				<KeyboardDatePicker
					required
					label="Birthdate"
					format="MM/dd/yyyy"
					value={birthdate}
					onChange={date => setBirthdate(date)}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<div className={classes.submitContainer}>
					<Button
						color="primary"
						onClick={() => savePuppy({
							name,
							surname,
							color,
							sire,
							dame,
							birthdate,
							gender
						})}>
						Save Puppy
					</Button>
				</div>

			</form>
			<h3>{name}</h3>
			<h3>{surname}</h3>
			<h3>{gender}</h3>
			<h3>{typeof birthdate !== 'undefined' && birthdate.toString()}</h3>
			<h3>{sire}</h3>
			<h3>{dame}</h3>
			<h3>{color}</h3>


		</MuiPickersUtilsProvider>
	);
};

export default AddPuppy;