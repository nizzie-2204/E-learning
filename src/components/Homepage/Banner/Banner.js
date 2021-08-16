import React from "react";
import Container from "@material-ui/core/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/styles";
import bgImage1 from "assets/images/slider1.jpg";
import { Button, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const bannerStyle = makeStyles((theme) => ({
	banner: {
		marginTop: "87px",
		height: "700px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("md")]: {
			marginTop: "67px",
		},
	},
	container: {
		height: "100%",
		backgroundImage: `url(${bgImage1})`,
		backgroundPosition: "cover",
		backgroundSize: "100% 100%",
		backgroundRepeat: "no-repeat",
	},
	content: {
		width: "70%",
		height: "100%",
		margin: "0 auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		color: "#fff",
	},
	title: {
		fontSize: "60px",
		fontWeight: "700",
		textTransform: "capitalize",
		marginBottom: "40px",
	},
	subtitle: {
		fontSize: "20px",
		marginBottom: "50px",
	},
	button: {
		color: "#fff",
		fontSize: "20px",
		padding: "10px 30px",
		backgroundColor: "#ffb607",
		borderRadius: "20px",
		"&:hover": {
			color: "#ffb607",
			backgroundColor: "#fff",
		},
	},
}));

const Banner = () => {
	const classes = bannerStyle();

	return (
		<div className={classes.banner}>
			<Container maxWidth="xl" disableGutters className={classes.container}>
				<Fade bottom cascade>
					<div className={classes.content}>
						<Typography variant="h1" className={classes.title}>
							Chào mừng đến với môi trường tốt nhất dành cho bé
						</Typography>
						<Typography variant="subtitle1" className={classes.subtitle}>
							Chúng tôi cam kết, dành cho con của bạn một môi trường hoàn hảo để
							phát triển toàn diện
						</Typography>
						<Button className={classes.button}>Xem thêm</Button>
					</div>
				</Fade>
			</Container>
		</div>
	);
};

export default Banner;
