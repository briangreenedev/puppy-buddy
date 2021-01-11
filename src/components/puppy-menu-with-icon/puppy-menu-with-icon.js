import React, {useState} from 'react';
import ItemMenuIcon from "@material-ui/icons/MoreVert";
import {
	IconButton,
	MenuItem,
	Menu
} from "@material-ui/core";

const PuppyMenuWithIcon = ({puppy, items = []}) => {
	const [anchorElement, setAnchorElement] = useState(null)

	const handleClickMenu = (e) => {
		setAnchorElement(e.currentTarget);
	}
	const handleCloseMenu = (e) => {
		setAnchorElement(null);
	}

	const handleRecordWeight = () => {
		handleCloseMenu();
	}

	return (
		<div>
			<IconButton
					aria-haspopup="true"
					aria-controls={`puppy-menu`}
					onClick={handleClickMenu}>
				<ItemMenuIcon />
			</IconButton>
			<Menu
				id={`puppy-menu`}
				keepMounted
				anchorEl={anchorElement}
				open={anchorElement}
				onClose={handleCloseMenu}
			>
				{
					items.map(item => (
						<MenuItem onClick={() => {
							handleCloseMenu();
							item.handler(puppy);
						}}>{item.name}</MenuItem>
					))
				}
			</Menu>
		</div>

	);
};

export default PuppyMenuWithIcon;