import {
	Avatar,
	Button,
	Checkbox,
	Container,
	CssBaseline,
	FormControlLabel,
	makeStyles,
	TextField,
	Typography,
	withStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
	login: {
		backgroundColor: "#fffaee",
		height: "100vh",
	},
	container: {
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		width: "40%",
		height: "100%",
		padding: "70px 0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#ffb607",
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		backgroundColor: "#ffb607",
		"&:hover": {
			backgroundColor: "#007bff",
		},
	},
	input: {
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

const CustomCheckbox = withStyles({
	root: {
		color: " #ffb607",
		"&$checked": {
			color: " #ffb607",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Login = () => {
	const classes = useStyles();
	return (
		<>
			<Helmet>
				<title>Đăng nhập - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<div className={classes.login}>
				<Container component="main" maxWidth="lg" className={classes.container}>
					<CssBaseline />
					<div className={classes.paper}>
						<Avatar className={classes.avatar}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
							Đăng nhập
						</Typography>
						<form className={classes.form} noValidate>
							<TextField
								className={classes.input}
								InputLabelProps={{
									style: { color: "#000" },
								}}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Tài khoản"
								name="email"
								autoComplete="email"
								autoFocus
							/>
							<TextField
								className={classes.input}
								InputLabelProps={{
									style: { color: "#000" },
								}}
								variant="outlined"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Mật khẩu"
								type="password"
								id="password"
								autoComplete="current-password"
							/>
							<FormControlLabel
								control={<CustomCheckbox value="remember" color="primary" />}
								label="Remember me"
							/>

							{/* <RouterLink to="/" variant="body2">
							Forgot password?
						</RouterLink> */}
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Đăng nhập
							</Button>
						</form>
					</div>
				</Container>
			</div>
		</>
	);
};

export default Login;
