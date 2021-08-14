import {
	Button,
	Container,
	FormControl,
	Grid,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
	List,
	ListItem,
	ListItemIcon,
	MenuItem,
	MenuList,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import logo from "assets/images/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const footerStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: "#232936",
		padding: "40px 0",
	},
	footerLogo: {
		marginBottom: "25px",
	},
	footerLogoDesc: {
		fontSize: "16px",
		color: "#bcc5d0",
	},
	footerListTitle: {
		fontSize: "20px",
		fontWeight: "700",
		color: "#fff",
		padding: "0 16px",
	},
	footerListText: {
		fontSize: "16px",
		color: "#bcc5d0",
	},
	footerForm: {
		display: "flex",
		flexDirection: "column",
	},
	footerInput: {
		border: "1px solid #bcc5d0",
		color: "#000",
		background: "#fff",
		padding: "10px",
		"&:focus": {
			outline: "none",
			border: "none",
		},
	},
	between: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
}));

const Footer = () => {
	const classes = footerStyles();

	return (
		<footer className={classes.footer}>
			<Container maxWidth="xl">
				<Grid container spacing={4}>
					<Grid item md={4} sm={12}>
						<div className={classes.footerLogo}>
							<img src={logo} alt="logo" />
						</div>
						<Typography
							component="p"
							variant="body2"
							className={classes.footerLogoDesc}
						>
							Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ
							nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình
							bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ
							gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn
							bản giống thật hơn, bình thường hơn
						</Typography>
					</Grid>
					<Grid item md={5} sm={12} xs={12}>
						<Grid item container>
							<Grid xs={6}>
								<Typography
									component="h2"
									variant="body2"
									className={classes.footerListTitle}
								>
									Cơ sở chúng tôi
								</Typography>
								<List>
									<ListItem>
										<ListItemIcon className={classes.footerListText}>
											<HomeIcon fontSize="small" />
										</ListItemIcon>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											Số 1 Đường 3/2, Phường 15, Quận 11, Tp.HCM
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon className={classes.footerListText}>
											<PhoneIcon fontSize="small" />
										</ListItemIcon>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											0123456789{" "}
										</Typography>
									</ListItem>
									<ListItem>
										<ListItemIcon className={classes.footerListText}>
											<MailOutlineIcon fontSize="small" />
										</ListItemIcon>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											international@school.com
										</Typography>
									</ListItem>
								</List>
							</Grid>
							<Grid xs={6} className={classes.between}>
								<Typography
									component="h2"
									variant="body2"
									className={classes.footerListTitle}
								>
									Các lớp học
								</Typography>
								<List>
									<ListItem>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											Năng Khiếu Vẽ
										</Typography>
									</ListItem>
									<ListItem>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											Múa Đương Đại
										</Typography>
									</ListItem>
									<ListItem>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											Thể Thao
										</Typography>
									</ListItem>
									<ListItem>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											Múa Ba Lê
										</Typography>
									</ListItem>
									<ListItem>
										<Typography
											variant="inherit"
											className={classes.footerListText}
										>
											Năng Khiếu Hát
										</Typography>
									</ListItem>
								</List>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={3} sm={12} xs={12}>
						<Typography
							component="h2"
							variant="body2"
							className={classes.footerListTitle}
							style={{ padding: "0 0 20px 0" }}
						>
							Đăng kí
						</Typography>

						<Typography
							component="p"
							variant="body2"
							className={classes.footerListText}
							style={{ padding: "0 0 20px 0" }}
						>
							Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
						</Typography>
						<FormControl>
							<Input
								placeholder="Email..."
								className={classes.footerInput}
								id="standard-adornment-password"
								endAdornment={
									<InputAdornment position="end">
										<IconButton aria-label="toggle password visibility">
											<SendIcon />
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<div></div>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
