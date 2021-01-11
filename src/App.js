import React, {useContext, useReducer, useState} from 'react';
import MainDrawer from "./components/main-drawer/main-drawer";
import {
	AppBar, createMuiTheme,
	Toolbar,
	Typography,
	Container
} from '@material-ui/core';
import {BrowserRouter, Route, useHistory} from "react-router-dom";
import Home from "./pages/home";
import Puppies from "./pages/puppies";

import {
	CustomIcon,
	ReportIcon,
	UserIcon,
	ContractIcon,
	WaitingIcon,
	LitterIcon,
	AccountIcon,
	SettingsIcon,
	LogoutIcon,
	ComponentsIcon
} from './icons/icons';

import {ThemeProvider} from "@material-ui/styles";
import Logo from "./components/logo";
import MyComponents from "./pages/my-components";
import PuppyWeight from "./pages/puppy-weight";
import {makeStyles} from "@material-ui/core/styles";
export const GlobalState = React.createContext();

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#400080'
		}
	}
})

const useStyles = makeStyles(theme => ({
	container: {
		marginTop: '25px'
	}
}))

const initialGlobalState = {
	pageTitle: 'Puppy Buddy'
}
const reducer = (state, action) => {
	switch(action.type) {
		case 'setUser':
			return {
				...state,
				user: action.payload
			}
		default:
			return state
	}
}

function App() {
	const [globalState, dispatch] = useReducer(reducer, initialGlobalState);
	const [title, setTitle] = useState('Puppy Buddy');
	const classes = useStyles();
	return (
		<GlobalState.Provider value={{globalState, dispatch}}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<AppBar position="static">
						<Container maxWidth="lg" disableGutters="true">
							<Toolbar>
								<MainDrawer
									iconColor="#ffffff"
									listItems={[
										[
											{
												name: 'Puppies',
												icon: <CustomIcon icon="puppies"/>
											},
											{
												name: 'Litters',
												icon: <LitterIcon/>
											}
										], [
											{
												name: 'Users',
												icon: <UserIcon/>
											},
											{
												name: 'Contracts',
												icon: <ContractIcon/>
											},
											{
												name: 'Waiting List',
												icon: <WaitingIcon/>
											}
										], [
											{
												name: 'Reports',
												icon: <ReportIcon/>
											}
										], [
											{
												name: 'Components',
												icon: <ComponentsIcon />
											}
										]]}
									footerItems={[
										{
											name: 'Account',
											icon: <AccountIcon/>
										},
										{
											name: 'Settings',
											icon: <SettingsIcon/>
										},
										{
											name: 'Logout',
											icon: <LogoutIcon/>,
											color: '#de5252'
										}
									]}
								/>
								<Logo imgSrc="logo-white-transparent.png"/>
								<Typography variant="h6">
									{title}
								</Typography>
							</Toolbar>
						</Container>
					</AppBar>
					<Container className={classes.container} maxWidth="lg">
						<Route path="/" render={props => {
							setTitle('Home')
							return <Home {...props} />
						}} />
						<Route path="/puppies" render={props => {
							setTitle('Puppies')
							return <Puppies {...props} />
						}} />
						<Route path="/components" render={props => {
							setTitle('My Components')
							return <MyComponents {...props} />
						}} />
						<Route path="/puppyweight/:id/:name" render={props => {
							debugger
							const {name: puppyName, id} = props.match.params;
							setTitle(`${puppyName} - Puppy Weight`)
							return <PuppyWeight puppyId={id} {...props} />
						}} />
					</Container>
				</BrowserRouter>
			</ThemeProvider>
		</GlobalState.Provider>
	);
}

export default App;