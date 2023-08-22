import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as BsIcons from "react-icons/bs";
import PropTypes from "prop-types";

const NavListItem = ({ icon, text }) => {
	const Icon = BsIcons[icon];
	return (
		<ListItemButton
			sx={{
				minHeight: 48,
				justifyContent: open ? "initial" : "center",
				px: 2.5,
			}}>
			<ListItemIcon
				sx={{
					minWidth: 0,
					mr: open ? 3 : "auto",
					justifyContent: "center",
				}}>
				{icon && <Icon />}
			</ListItemIcon>
			<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
		</ListItemButton>
	);
};

NavListItem.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default NavListItem;
