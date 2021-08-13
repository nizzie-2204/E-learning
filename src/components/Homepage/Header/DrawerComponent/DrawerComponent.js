import {
	List,
	ListItemText,
	Typography,
	Drawer,
	IconButton,
	ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/styles";
import MuiListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const drawerStyle = makeStyles({
	drawer: {
		paddingTop: "20px",
	},
	iconClose: {
		color: "#000",
	},
	nav: {
		// position: "fixed",
		width: "300px",
		// height: "100vh",
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
	},
	navItem: {
		padding: "15px 20px !important",
	},
	navItemText: {
		fontSize: "18px",
		fontWeight: "700",
		textTransform: "uppercase",
		color: "#000",
		"&:hover": {
			color: "#ffb607",
		},
	},
	navItemTextDropdown: {
		display: "flex",
		alignItems: "flex-start",
		fontSize: "14px",
		fontWeight: "700",
		textTransform: "uppercase",
		color: "#000",
		border: "none !important",
		"&:hover": {
			color: "#ffb607",
		},
	},
	navItemDropdown: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
	},
	borderNone: {
		border: "none !important",
	},
});

const ListItem = withStyles({
	root: {
		color: "#393d72",
		padding: "25px 20px",
		borderBottom: "1px solid #ddd",
		"&:hover": {
			color: "#dd006d",
		},
	},
})(MuiListItem);

const DrawerComponent = () => {
	const classes = drawerStyle();
	const [mobileOpen, setMobileOpen] = useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const [openDropdown, setOpenDropdown] = useState(false);
	const handleOpenDropdown = () => {
		setOpenDropdown(!openDropdown);
		setOpenDropdown2(false);
	};

	const [openDropdown2, setOpenDropdown2] = useState(false);
	const handleOpenDropdown2 = () => {
		setOpenDropdown2(!openDropdown2);
		setOpenDropdown(false);
	};

	return (
		<>
			<IconButton onClick={handleDrawerToggle} style={{ marginLeft: "auto" }}>
				<MenuIcon />
			</IconButton>
			<Drawer
				className={classes.drawer}
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
			>
				<List component="nav" className={classes.nav}>
					<IconButton
						className={classes.iconClose}
						onClick={handleDrawerToggle}
						style={{ marginLeft: "auto" }}
					>
						<CloseIcon />
					</IconButton>
					<ListItem component={RouterLink} to="/" className={classes.navItem}>
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
						component={RouterLink}
						to="/"
						className={`${classes.navItem} ${classes.navItemDropdown}`}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
							}}
						>
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Giới thiệu
									</Typography>
								}
							></ListItemText>
							<ListItemIcon>
								<ExpandMoreIcon
									style={{ color: "#000", marginLeft: "auto" }}
									onClick={handleOpenDropdown2}
								/>
							</ListItemIcon>
						</div>

						{openDropdown2 && (
							<div className={classes.navItemDropdown}>
								<List component="nav" disablePadding>
									<ListItem
										className={`${classes.navItem} ${classes.borderNone}`}
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
										className={`${classes.navItem} ${classes.borderNone}`}
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
										className={`${classes.navItem} ${classes.borderNone}`}
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
						style={{ position: "relative" }}
						component={RouterLink}
						to="/"
						className={`${classes.navItem} ${classes.navItemDropdown}`}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
							}}
						>
							<ListItemText
								disableTypography
								primary={
									<Typography type="body2" className={classes.navItemText}>
										Chương trình học
									</Typography>
								}
							></ListItemText>
							<ListItemIcon>
								<ExpandMoreIcon
									style={{ color: "#000", marginLeft: "auto" }}
									onClick={handleOpenDropdown}
								/>
							</ListItemIcon>
						</div>

						{openDropdown && (
							<div className={classes.navItemDropdown}>
								<List component="nav" disablePadding>
									<ListItem
										className={`${classes.navItem} ${classes.borderNone}`}
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
										className={`${classes.navItem} ${classes.borderNone}`}
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
										className={`${classes.navItem} ${classes.borderNone}`}
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
					<ListItem component={RouterLink} to="/" className={classes.navItem}>
						<ListItemText
							disableTypography
							primary={
								<Typography type="body2" className={classes.navItemText}>
									Tuyển sinh
								</Typography>
							}
						></ListItemText>
					</ListItem>
					<ListItem component={RouterLink} to="/" className={classes.navItem}>
						<ListItemText
							disableTypography
							primary={
								<Typography type="body2" className={classes.navItemText}>
									Liên hệ
								</Typography>
							}
						></ListItemText>
					</ListItem>
					<ListItem component={RouterLink} to="/" className={classes.navItem}>
						<ListItemText
							disableTypography
							primary={
								<Typography type="body2" className={classes.navItemText}>
									Đăng nhập
								</Typography>
							}
						></ListItemText>
					</ListItem>
				</List>
			</Drawer>
		</>
	);
};

export default DrawerComponent;
