import React from "react";
import Header from "components/Homepage/Header/Header";
import { Helmet } from "react-helmet";
import Breadcrumb from "components/Homepage/Breadcrumb/Breadcrumb";
import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import image1 from "assets/images/hoclichsuobaotang.jpg";
import image3 from "assets/images/jpj_WKWQ.jpg";
import image2 from "assets/images/SG200481.jpg";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Footer from "components/Homepage/Footer/Footer";

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
	root: {
		maxWidth: 345,
		textAlign: "center",
		textDecoration: "none",
		boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
		transition: "all 0.1s cubic-bezier(.25,.8,.25,1)",
		" &:hover": {
			boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
		},
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	gridItem: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			marginBottom: "20px",
		},
	},
	cardTitle: {
		color: "#000",
		fontSize: "20px",
		marginBottom: "10px",
	},
	cardSubtitle: {
		color: "#52575e",
		fontSize: "12px",
		marginBottom: "20px",
		display: "block",
	},
	cardDesc: {
		color: "#353535",
		fontSize: "14px",
	},
}));

const Admission = () => {
	const links = [
		{
			title: "Trang chủ",
			path: "/",
		},
		{
			title: "Tuyển sinh",
			path: "/admission",
		},
	];
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Tuyển sinh - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<Container maxWidth="xl" className={classes.container}>
				<Typography className={classes.title} variant="h2">
					Thông tin tuyển sinh
				</Typography>
				<Grid container justifyContent="center">
					<Grid disableSpacing className={classes.gridItem} item md={4} sm={12}>
						<Card className={classes.root} component={RouterLink} to="/">
							<CardMedia
								className={classes.media}
								image={image1}
								title="News"
							/>
							<CardContent>
								<Typography
									variant="h5"
									component="h2"
									className={classes.cardTitle}
								>
									Lớp Học Đầu Tiên Cho Bé
								</Typography>

								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									Lorem Ipsum là gì? Lorem Ipsum chỉ đơn giản là một đoạn văn
									bản giả, được ...
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid disableSpacing className={classes.gridItem} item md={4} sm={12}>
						<Card className={classes.root} component={RouterLink} to="/">
							<CardMedia
								className={classes.media}
								image={image2}
								title="News"
							/>
							<CardContent>
								<Typography
									variant="h5"
									component="h2"
									className={classes.cardTitle}
								>
									Tuyển Sinh Mùa Xuân
								</Typography>

								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									Lorem Ipsum là gì? Lorem Ipsum chỉ đơn giản là một đoạn văn
									bản giả, được ...
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid disableSpacing className={classes.gridItem} item md={4} sm={12}>
						<Card className={classes.root} component={RouterLink} to="/">
							<CardMedia
								className={classes.media}
								image={image3}
								title="News"
							/>
							<CardContent>
								<Typography
									variant="h5"
									component="h2"
									className={classes.cardTitle}
								>
									Tuyển Sinh Mùa Hè
								</Typography>

								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									Lorem Ipsum là gì? Lorem Ipsum chỉ đơn giản là một đoạn văn
									bản giả, được ...
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>

			<Footer />
		</>
	);
};

export default Admission;
