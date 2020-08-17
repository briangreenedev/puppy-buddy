import React, {useReducer} from 'react';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	Divider
} from "@material-ui/core";
import DrawerIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import UserSectionForMenu from "../user-section-for-menu";
import {useHistory} from 'react-router-dom';

function drawerReducer(state, action) {
	switch (action.type) {
		case 'openDrawer': {
			return {
				...state,
				isOpen: true
			}
		}
		case 'closeDrawer': {
			return {
				...state,
				isOpen: false
			}
		}
	}
	return state;
}

const useStyles = makeStyles(theme => ({
	list: {
		width: 250,
		display: 'flex',
		flexDirection: 'column'
	},
	bold: {
		fontWeight: 'bold'
	},
	icon: {
		opacity: '.4'
	},
	name: {
		fontWeight: 'bold'
	}
}));

export default function MainDrawer({anchor = 'left', listItems = [], footerItems = [], keys = {iconKey: 'icon', nameKey: 'name'}}) {
	const [state, dispatch] = useReducer(drawerReducer, {
		isOpen: false
	});
	const history = useHistory();
	const classes = useStyles()

	return (
		<React.Fragment>
			<Drawer
				anchor={anchor}
				open={state['isOpen']}
				ModalProps={{
					onBackdropClick: () => dispatch({type: 'closeDrawer'})
				}}
			>
				<div
					className={classes.list}
					role="presentation"
				>
					<UserSectionForMenu />
					<div className={classes.mainList}>
						{listItems.map((list, index) => (
							<React.Fragment>
								<List>
									{list.map((item) => (
										<ListItem
											button key={item.name}
											onClick={() => {
												dispatch({type: 'closeDrawer'})
												history.push(`/${item.name.toLowerCase()}`)
											}}>
											<ListItemIcon className={classes.icon}>{item.icon
												? item.icon
												: item[keys.iconKey]}
											</ListItemIcon>
											<ListItemIcon className={classes.name}>
													{item.name
														? item.name
														: item[keys.nameKey]}
											</ListItemIcon>
										</ListItem>
									))}
								</List>
								<Divider key={index} />
							</React.Fragment>
						))}
					</div>

					<div className={classes.list}>
						<List>
							{footerItems.map((item) => (
								<ListItem button key={item.name}>
									<ListItemIcon
										style={{
											color: item.color ? item.color : 'inherit'
										}}
										className={classes.icon}>{item.icon
										? item.icon
										: item[keys.iconKey]}
									</ListItemIcon>
									<ListItemIcon
										style={{
											color: item.color ? item.color : '',
										}}
										className={classes.name}>{item.name
										? item.name
										: item[keys.nameKey]}
									</ListItemIcon>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Drawer>
			<IconButton
				color="inherit"
				onClick={() => dispatch({type: 'openDrawer'})}
			>
				<DrawerIcon />
			</IconButton>
		</React.Fragment>
	)
}