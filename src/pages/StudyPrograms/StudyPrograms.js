import {
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Breadcrumb from "components/Homepage/Breadcrumb/Breadcrumb";
import Header from "components/Homepage/Header/Header";
import React from "react";
import { Helmet } from "react-helmet";
import image1 from "assets/images/aboutImg.png";
import image2 from "assets/images/education.png";
import image3 from "assets/images/class.png";
import image4 from "assets/images/academy.png";
import bgImage from "assets/images/choice-bg.jpg";
import Footer from "components/Homepage/Footer/Footer";

const useStyles = makeStyles({
	container: {
		padding: "100px 0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	grid: {},
	gridItem: {
		marginBottom: "50px",
	},
	card: {
		width: "80%",
		margin: "0 auto",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#fff",
		paddingTop: "20px",
		boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
		transition: "all 0.1s cubic-bezier(.25,.8,.25,1)",
		" &:hover": {
			boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
		},
	},
	cardHeader: {
		width: "130px",
		height: "130px",
		borderRadius: "50%",
		background: "#3ab64c",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "20px",
	},
	cardMedia: {
		maxWidth: "75px",
		maxHeight: "75px",
		objectFit: "cover",
	},
	cartTitle: {
		fontSize: "24px",
		fontWeight: "700",
		color: "#000",
		textAlign: "center",
		position: "relative",
		marginBottom: "20px",
		"&::before": {
			position: "absolute",
			content: "''",
			bottom: "-10px",
			left: "50%",
			transform: "translate(-50%)",
			width: "50px",
			height: "2px",
			backgroundColor: "#fff",
		},
	},
	cartSubtitle: {
		fontSize: "16px",
		color: "#000",
		textAlign: "center",
	},
	title: {
		textTransform: "capitalize",
		width: "100%",
		fontSize: "48px",
		fontWeight: "700",
		textAlign: "center",
		color: "#000",
		marginBottom: "60px",
	},
});

const StudyPrograms = () => {
	const links = [
		{
			title: "Trang ch???",
			path: "/",
		},
		{
			title: "Ch????ng tr??nh",
			path: "/teacher",
		},
		{
			title: "T?? v???n gi??o d???c",
			path: "/programs",
		},
	];
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>T?? v???n gi??o d???c - H??? th???ng tr?????ng qu???c t???</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<Container maxWidth="xl" className={classes.container}>
				<Typography className={classes.title} variant="h2">
					C??c ch????ng tr??nh h???c
				</Typography>
				<Grid container className={classes.grid}>
					<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
						<Card classes={{ root: classes.card }}>
							<div className={classes.cardHeader}>
								<CardMedia
									component="img"
									className={classes.cardMedia}
									image={image2}
									title="Teacher"
								/>
							</div>
							<span className={classes.cardDivider}></span>
							<CardContent style={{ paddingTop: "0" }}>
								<Typography
									className={classes.cartTitle}
									variant="h5"
									color="textSecondary"
									component="p"
								>
									K??? N??ng H???c T???p
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Tr??i v???i quan ??i???m chung c???a s??? ????ng, Lorem Ipsum kh??ng ph???i
									ch??? l?? m???t ??o???n v??n b???n ng???u nhi??n. Ng?????i ta t??m th???y ngu???n
									g???c c???a n?? t??? nh???ng t??c ph???m v??n h???c la-tinh c??? ??i???n xu???t hi???n
									t??? n??m 45 tr?????c C??ng Nguy??n, ngh??a l?? n?? ???? c?? kho???ng h??n 2000
									tu???i.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
						<Card classes={{ root: classes.card }}>
							<div
								className={classes.cardHeader}
								style={{ backgroundColor: "#3db2d5" }}
							>
								<CardMedia
									component="img"
									className={classes.cardMedia}
									image={image3}
									title="Teacher"
								/>
							</div>
							<span className={classes.cardDivider}></span>
							<CardContent style={{ paddingTop: "0" }}>
								<Typography
									className={classes.cartTitle}
									variant="h5"
									color="textSecondary"
									component="p"
								>
									Gi??o D???c K?? N??ng S???ng
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Tr??i v???i quan ??i???m chung c???a s??? ????ng, Lorem Ipsum kh??ng ph???i
									ch??? l?? m???t ??o???n v??n b???n ng???u nhi??n. Ng?????i ta t??m th???y ngu???n
									g???c c???a n?? t??? nh???ng t??c ph???m v??n h???c la-tinh c??? ??i???n xu???t hi???n
									t??? n??m 45 tr?????c C??ng Nguy??n, ngh??a l?? n?? ???? c?? kho???ng h??n 2000
									tu???i.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
						<Card classes={{ root: classes.card }}>
							<div
								className={classes.cardHeader}
								style={{ backgroundColor: "#dd1146" }}
							>
								<CardMedia
									component="img"
									className={classes.cardMedia}
									image={image4}
									title="Teacher"
								/>
							</div>
							<span className={classes.cardDivider}></span>
							<CardContent style={{ paddingTop: "0" }}>
								<Typography
									className={classes.cartTitle}
									variant="h5"
									color="textSecondary"
									component="p"
								>
									Khoa H???c
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Tr??i v???i quan ??i???m chung c???a s??? ????ng, Lorem Ipsum kh??ng ph???i
									ch??? l?? m???t ??o???n v??n b???n ng???u nhi??n. Ng?????i ta t??m th???y ngu???n
									g???c c???a n?? t??? nh???ng t??c ph???m v??n h???c la-tinh c??? ??i???n xu???t hi???n
									t??? n??m 45 tr?????c C??ng Nguy??n, ngh??a l?? n?? ???? c?? kho???ng h??n 2000
									tu???i.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
						<Card classes={{ root: classes.card }}>
							<div className={classes.cardHeader}>
								<CardMedia
									component="img"
									className={classes.cardMedia}
									image={image4}
									title="Teacher"
								/>
							</div>
							<span className={classes.cardDivider}></span>
							<CardContent style={{ paddingTop: "0" }}>
								<Typography
									className={classes.cartTitle}
									variant="h5"
									color="textSecondary"
									component="p"
								>
									K???t N???i X?? H???i
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Tr??i v???i quan ??i???m chung c???a s??? ????ng, Lorem Ipsum kh??ng ph???i
									ch??? l?? m???t ??o???n v??n b???n ng???u nhi??n. Ng?????i ta t??m th???y ngu???n
									g???c c???a n?? t??? nh???ng t??c ph???m v??n h???c la-tinh c??? ??i???n xu???t hi???n
									t??? n??m 45 tr?????c C??ng Nguy??n, ngh??a l?? n?? ???? c?? kho???ng h??n 2000
									tu???i.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
						<Card classes={{ root: classes.card }}>
							<div
								className={classes.cardHeader}
								style={{ backgroundColor: "#3db2d5" }}
							>
								<CardMedia
									component="img"
									className={classes.cardMedia}
									image={image3}
									title="Teacher"
								/>
							</div>
							<span className={classes.cardDivider}></span>
							<CardContent style={{ paddingTop: "0" }}>
								<Typography
									className={classes.cartTitle}
									variant="h5"
									color="textSecondary"
									component="p"
								>
									??m Nh???c
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Tr??i v???i quan ??i???m chung c???a s??? ????ng, Lorem Ipsum kh??ng ph???i
									ch??? l?? m???t ??o???n v??n b???n ng???u nhi??n. Ng?????i ta t??m th???y ngu???n
									g???c c???a n?? t??? nh???ng t??c ph???m v??n h???c la-tinh c??? ??i???n xu???t hi???n
									t??? n??m 45 tr?????c C??ng Nguy??n, ngh??a l?? n?? ???? c?? kho???ng h??n 2000
									tu???i.
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid item md={4} sm={6} xs={12} className={classes.gridItem}>
						<Card classes={{ root: classes.card }}>
							<div
								className={classes.cardHeader}
								style={{ backgroundColor: "#dd1146" }}
							>
								<CardMedia
									component="img"
									className={classes.cardMedia}
									image={image2}
									title="Teacher"
								/>
							</div>
							<span className={classes.cardDivider}></span>
							<CardContent style={{ paddingTop: "0" }}>
								<Typography
									className={classes.cartTitle}
									variant="h5"
									color="textSecondary"
									component="p"
								>
									To??n H???c
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Tr??i v???i quan ??i???m chung c???a s??? ????ng, Lorem Ipsum kh??ng ph???i
									ch??? l?? m???t ??o???n v??n b???n ng???u nhi??n. Ng?????i ta t??m th???y ngu???n
									g???c c???a n?? t??? nh???ng t??c ph???m v??n h???c la-tinh c??? ??i???n xu???t hi???n
									t??? n??m 45 tr?????c C??ng Nguy??n, ngh??a l?? n?? ???? c?? kho???ng h??n 2000
									tu???i.
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

export default StudyPrograms;
