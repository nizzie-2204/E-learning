import {
	AppBar,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "assets/images/logo.png";
import React from "react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import DrawerComponent from "./DrawerComponent/DrawerComponent";

const headerStyles = makeStyles((theme) => ({
	header: {
		padding: "10px 0",
		backgroundColor: "#fff",
	},
	logo: {
		width: "250px",
	},
	nav: {
		flex: "1",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	navItemText: {
		fontSize: "15px",
		fontWeight: "700",
		textTransform: "uppercase",
		textAlign: "center",
		color: "#000",
		padding: "0",
		"&:hover": {
			color: "#ffb607",
		},
	},
	login: {
		textDecoration: "none",
		backgroundColor: "#ffb607",
		padding: "11px 23px",
		borderRadius: "20px",
		"&:hover": {
			background: "#003d69",
		},
	},
	listDropdown: {
		position: "absolute",
		top: "44px",
		left: "-25px",
		width: "250px",
		color: "#fff",
		backgroundColor: "#ffb607",
		borderRadius: "28px",
		padding: "15px 0",
		overflow: "hidden",
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
}));

const Header = () => {
	const classes = headerStyles();
	const [openDropdown, setOpenDropdown] = useState(false);
	const [openDropdown2, setOpenDropdown2] = useState(false);

	return (
		<AppBar position="fixed" className={classes.header}>
			<Toolbar>
				<RouterLink to="/">
					<img src={logo} alt="logo" className={classes.logo} />
				</RouterLink>
				<Hidden smDown implementation="js">
					<List component="nav" className={classes.nav}>
						<ListItem disableGutters component={RouterLink} to="/">
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Trang chủ
									</Typography>
								}
							></ListItemText>
						</ListItem>
						<ListItem
							onMouseOver={() => {
								setOpenDropdown2(true);
							}}
							onMouseLeave={() => {
								setOpenDropdown2(false);
							}}
							disableGutters
							component={RouterLink}
							to="/"
						>
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Giới thiệu
									</Typography>
								}
							></ListItemText>
							{openDropdown2 && (
								<div className={classes.listDropdown}>
									<List component="div" disablePadding>
										<ListItem
											className={classes.navItemDropdown}
											disableGutters
											component={RouterLink}
											to="/"
										>
											<ListItemText
												disableTypography
												primary={
													<Typography
														type="body2"
														className={classes.navItemTextDropdown}
													>
														Đội ngủ giáo viên
													</Typography>
												}
											></ListItemText>
										</ListItem>
										<ListItem
											className={classes.navItemDropdown}
											disableGutters
											component={RouterLink}
											to="/"
										>
											<ListItemText
												disableTypography
												primary={
													<Typography
														type="body2"
														className={classes.navItemTextDropdown}
													>
														Lời ngỏ
													</Typography>
												}
											></ListItemText>
										</ListItem>
										<ListItem
											className={classes.navItemDropdown}
											disableGutters
											component={RouterLink}
											to="/"
										>
											<ListItemText
												disableTypography
												primary={
													<Typography
														type="body2"
														className={classes.navItemTextDropdown}
													>
														Tầm nhìn và sứ mệnh
													</Typography>
												}
											></ListItemText>
										</ListItem>
									</List>
								</div>
							)}
						</ListItem>
						<ListItem
							onMouseOver={() => {
								setOpenDropdown(true);
							}}
							onMouseLeave={() => {
								setOpenDropdown(false);
							}}
							disableGutters
							className={classes.dropdown}
							component={RouterLink}
							to="/"
						>
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Chương trình
									</Typography>
								}
							></ListItemText>
							{openDropdown && (
								<div className={classes.listDropdown}>
									<List component="div" disablePadding>
										<ListItem
											className={classes.navItemDropdown}
											disableGutters
											component={RouterLink}
											to="/"
										>
											<ListItemText
												disableTypography
												primary={
													<Typography
														type="body2"
														className={classes.navItemTextDropdown}
													>
														Tư vấn giáo dục
													</Typography>
												}
											></ListItemText>
										</ListItem>
										<ListItem
											className={classes.navItemDropdown}
											disableGutters
											component={RouterLink}
											to="/"
										>
											<ListItemText
												disableTypography
												primary={
													<Typography
														type="body2"
														className={classes.navItemTextDropdown}
													>
														Chương trình giáo dục
													</Typography>
												}
											></ListItemText>
										</ListItem>
										<ListItem
											className={classes.navItemDropdown}
											disableGutters
											component={RouterLink}
											to="/"
										>
											<ListItemText
												disableTypography
												primary={
													<Typography
														type="body2"
														className={classes.navItemTextDropdown}
													>
														Phương pháp giáo dục
													</Typography>
												}
											></ListItemText>
										</ListItem>
									</List>
								</div>
							)}
						</ListItem>
						<ListItem disableGutters component={RouterLink} to="/">
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Tuyển sinh
									</Typography>
								}
							></ListItemText>
						</ListItem>
						<ListItem disableGutters component={RouterLink} to="/">
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Liên hệ
									</Typography>
								}
							></ListItemText>
						</ListItem>
					</List>

					<RouterLink to="/login" className={classes.login}>
						<Typography
							variant="body2"
							style={{ color: "#fff" }}
							className={classes.navItemText}
						>
							Đăng nhập
						</Typography>
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
