import {
	AppBar,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	MenuItem,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "assets/images/logo.png";
import React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import {
	usePopupState,
	bindHover,
	bindMenu,
} from "material-ui-popup-state/hooks";
import Menu from "material-ui-popup-state/HoverMenu";

const headerStyles = makeStyles((theme) => ({
	header: {
		backgroundColor: "#fff",
		height: "90px",
		display: "flex",
		justifyContent: "center",
	},
	logo: {
		width: "250px",
	},
	nav: {
		flex: "1",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "0",
	},
	navItemText: {
		fontSize: "15px",
		fontWeight: "700",
		textTransform: "uppercase",
		textAlign: "center",
		color: "#000",
		backgroundColor: "transparent",
		boxShadow: "none",
		borderRadius: "0",
		padding: "32px 25px",
		transition: "0.2s",
		position: "relative",
		"&:hover": {
			boxShadow: "none",
			backgroundColor: "#ffb607",
			color: "#fff",
		},
		[theme.breakpoints.down("md")]: {
			padding: "32px 10px",
		},
	},

	listDropdown: {
		marginTop: "65px",
		backgroundColor: "#fff",
		padding: "0",
		borderRadius: "0",
	},
	navItemDropdown: {
		padding: "8px 25px",
		"&:hover": {
			backgroundColor: "#ffa107",
		},
	},
	navItemTextDropdown: {
		fontSize: "14px",
		fontWeight: "700",
		textTransform: "uppercase",
		color: "#000",
		transition: "0.2s",
		backgroundColor: "#fff",
		padding: "12px 24px",
		"&:hover": {
			backgroundColor: "#ffb607",
			color: "#fff",
		},
	},
	dropdown: {
		position: "relative",
		"&::before": {
			display: "block",
			position: "absolute",
			content: "''",
			top: "31px",
			left: "50%",
			transform: "translateX(-50%)",
			backgroundColor: "transparent",
			width: "120px",
			height: "50px",
		},
	},
	loginText: {
		fontSize: "14px",
		fontWeight: "700",
		textTransform: "uppercase",
		textDecoration: "none",
		color: "#fff",
		transition: "0.2s",
		backgroundColor: "#ffb607",
		padding: "15px 30px",
		borderRadius: "8px",
		"&:hover": {
			backgroundColor: "#007bff",
		},
	},
}));

const Header = () => {
	const classes = headerStyles();
	const popupState1 = usePopupState({ variant: "popover", popupId: "menu1" });
	const popupState2 = usePopupState({ variant: "popover", popupId: "menu2" });

	return (
		<AppBar position="fixed" className={classes.header}>
			<Toolbar>
				<RouterLink to="/">
					<img src={logo} alt="logo" className={classes.logo} />
				</RouterLink>
				<Hidden smDown implementation="js">
					<List component="nav" className={classes.nav}>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/"
							disableRipple
						>
							Trang chủ
						</Button>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/teacher"
							{...bindHover(popupState1)}
							disableRipple
						>
							Giới thiệu
						</Button>
						<Menu
							{...bindMenu(popupState1)}
							classes={{ paper: classes.listDropdown }}
							MenuListProps={{
								disablePadding: true,
							}}
						>
							<MenuItem
								selected={false}
								className={classes.navItemTextDropdown}
								onClick={popupState1.close}
								component={RouterLink}
								to="/teacher"
								disableRipple
							>
								Đội ngũ giáo viên
							</MenuItem>
							<MenuItem
								selected={false}
								className={classes.navItemTextDropdown}
								onClick={popupState1.close}
								component={RouterLink}
								to="/vision"
								disableRipple
							>
								Tầm nhìn và sứ mệnh
							</MenuItem>
						</Menu>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/programs"
							{...bindHover(popupState2)}
							disableRipple
						>
							Chương trình
						</Button>
						<Menu
							{...bindMenu(popupState2)}
							classes={{ paper: classes.listDropdown }}
							MenuListProps={{
								disablePadding: true,
							}}
						>
							<MenuItem
								selected={false}
								className={classes.navItemTextDropdown}
								onClick={popupState2.close}
								component={RouterLink}
								to="/programs"
								disableRipple
							>
								Tư vấn giáo dục
							</MenuItem>
							<MenuItem
								selected={false}
								className={classes.navItemTextDropdown}
								onClick={popupState2.close}
								component={RouterLink}
								to="/programs"
								disableRipple
							>
								Chương trình giáo dục
							</MenuItem>
							<MenuItem
								selected={false}
								className={classes.navItemTextDropdown}
								onClick={popupState2.close}
								component={RouterLink}
								to="/programs"
								disableRipple
							>
								Phương pháp giáo dục
							</MenuItem>
						</Menu>

						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/admission"
							disableRipple
						>
							Tuyển sinh
						</Button>
						<Button
							className={classes.navItemText}
							variant="contained"
							component={RouterLink}
							to="/contact"
							disableRipple
						>
							Liên hệ
						</Button>
					</List>

					<RouterLink to="/login" className={classes.loginText}>
						Đăng nhập
					</RouterLink>
				</Hidden>
				<Hidden mdUp implementation="js">
					<DrawerComponent />
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
