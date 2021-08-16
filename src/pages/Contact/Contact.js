import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Breadcrumb from "components/Homepage/Breadcrumb/Breadcrumb";
import Footer from "components/Homepage/Footer/Footer";
import Header from "components/Homepage/Header/Header";
import React from "react";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
	container: {
		padding: "100px 0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		width: "100%",
		fontSize: "48px",
		fontWeight: "700",
		textAlign: "center",
		color: "#000",
		marginBottom: "60px",
		textTransform: "capitalize",
	},
	form: {
		width: "80%",
		padding: "50px 70px",
		border: "1px solid #ffb607",
		[theme.breakpoints.down("sm")]: {
			width: "80%",
			padding: "40px 60px",
		},
		[theme.breakpoints.down("xs")]: {
			padding: "30px 50px",
		},
	},
	inputGroup: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: "30px",
	},
	root: {
		width: "48%",
		fontSize: "16px",
		color: "#000",
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffb607",
		},
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffb607",
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffb607",
		},
	},
	submit: {
		fontSize: "16px",
		color: "#fff",
		textTransform: "uppercase",
		padding: "10px 0",
		backgroundColor: "#ffb607",
	},
	textArea: {
		width: "100%",
		fontSize: "16px",
		color: "#000",
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffb607",
		},
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffb607",
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffb607",
		},
	},
}));

const Contact = () => {
	const links = [
		{
			title: "Trang chủ",
			path: "/",
		},
		{
			title: "Liên hệ",
			path: "/contact",
		},
	];
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Liên hệ - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<Container maxWidth="xl" className={classes.container}>
				<Typography className={classes.title} variant="h2">
					Liên hệ với chúng tôi
				</Typography>
				<form className={classes.form} noValidate autoComplete="off">
					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Họ tên"
							type="text"
							variant="outlined"
							InputLabelProps={{
								style: { color: "#000" },
							}}
						/>
						<TextField
							className={classes.root}
							label="Email"
							type="email"
							variant="outlined"
							InputLabelProps={{
								style: { color: "#000" },
							}}
						/>
					</div>
					<div className={classes.inputGroup}>
						<TextField
							className={classes.root}
							label="Số điện thoại"
							type="text"
							variant="outlined"
							InputLabelProps={{
								style: { color: "#000" },
							}}
						/>
						<TextField
							className={classes.root}
							label="Địa chỉ"
							type="text"
							variant="outlined"
							InputLabelProps={{
								style: { color: "#000" },
							}}
						/>
					</div>
					<div className={classes.inputGroup}>
						<TextField
							label="Lời nhắn"
							variant="outlined"
							multiline
							rows={6}
							className={classes.textArea}
							InputLabelProps={{
								style: { color: "#000" },
							}}
						/>
					</div>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Gửi
					</Button>
				</form>
			</Container>
			<Footer />
		</>
	);
};

export default Contact;
