import React, {useContext, useReducer, useState} from 'react';
import MainDrawer from "./components/main-drawer/main-drawer";
import {
	AppBar, createMuiTheme,
	Toolbar,
	Typography
} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
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
	LogoutIcon
} from './icons/icons';

import {ThemeProvider} from "@material-ui/styles";
import Logo from "./components/logo";
import ToolbarSection from "./components/toolbar-section";
import Tests from "./pages/tests";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#400080'
		}
	}
})

function App() {
	const [title, setTitle] = useState("Puppy Buddy");
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<AppBar position="static">
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
						<ToolbarSection side="left">
							<Typography variant="h6">
								{title}
							</Typography>
						</ToolbarSection>
					</Toolbar>
				</AppBar>
				<Route path="/" render={props => <Home {...props} setTitle={setTitle} />} />
				<Route path="/puppies" render={props => <Puppies {...props} setTitle={setTitle} />} />
				<Route path="/tests" render={props => <Tests {...props} setTitle={setTitle} />} />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;