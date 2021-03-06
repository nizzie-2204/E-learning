import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import image1 from "assets/images/hoclichsuobaotang.jpg";
import image3 from "assets/images/jpj_WKWQ.jpg";
import image2 from "assets/images/SG200481.jpg";
import React from "react";

const newsStyles = makeStyles((theme) => ({
	news: {
		padding: "40px 0",
	},
	newsTitle: {
		width: "100%",
		fontSize: "48px",
		fontWeight: "700",
		textAlign: "center",
		color: "#000",
		marginBottom: "60px",
	},
	root: {
		maxWidth: 345,
		height: "100%",
		textDecoration: "none",
		position: "relative",
		boxShadow: "0",
		border: "0",
		overflow: "hidden",

		"&::before, &::after": {
			position: "absolute",
			content: "''",
			width: "10%",
			height: "10%",
			backgroundColor: "transparent",
			border: "2px solid #ffb607",
			transition: "all 0.4s cubic-bezier(.25,.8,.25,1)",
		},
		"&::before": {
			top: "0",
			left: "0",
			borderBottom: "none",
			borderRight: "none",
		},
		"&::after": {
			bottom: "0",
			right: "0",
			borderTop: "none",
			borderLeft: "none",
		},
		"&:hover": {
			"&::before, &::after": {
				width: "100%",
				height: "100%",
			},
			// "& $media": {
			// 	transform: "scale3d(1.05, 1.05, 1)",
			// },
		},
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
		transition: "0.2s",
		overflow: "hidden",
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

const News = () => {
	const classes = newsStyles();

	return (
		<div className={classes.news}>
			<Container maxWidth="xl">
				<Typography className={classes.newsTitle} variant="h2">
					Tin t???c th??ng 10
				</Typography>
				<Grid container justifyContent="center">
					<Grid disableSpacing className={classes.gridItem} item md={4} sm={12}>
						<Card
							elevation={0}
							className={classes.root}
							component={RouterLink}
							to="/"
						>
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
									L???ch s???, kh??ng c??n l?? m??n h???c ???kh?? nh???n???n???a???
								</Typography>
								<Typography
									variant="h5"
									component="subtitle1"
									className={classes.cardSubtitle}
								>
									16 Th??ng M???t, 2019
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									V??o m???t chi???u cu???i thu, c?? m???t c???u h???c tr?? ?????n b??n c???nh t??i
									th?? th???m n??i: ??? C?? ??i! Con r???t th??ch h???c L???ch S??? nh??ng con l???i
									kh??ng th??ch ph???i thi c?? ???. Nh???ng c??u h???i ph???i tr??? ...
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid disableSpacing className={classes.gridItem} item md={4} sm={12}>
						<Card
							elevation={0}
							className={classes.root}
							component={RouterLink}
							to="/"
						>
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
									Back to school: Ch??o m???ng ng??y t???u tr?????ng n??m h???c
								</Typography>
								<Typography
									variant="h5"
									component="subtitle1"
									className={classes.cardSubtitle}
								>
									16 Th??ng M???t, 2019
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									N??m h???c 2018 ??? 2019 l?? n??m h???c v?? c??ng ?? ngh??a v?? ?????c bi???t ?????i
									v???i Tr?????ng M???n Non MONA Kids v?? ????y l?? n??m h???c th??? 10 c???a MONA
									Kids k??? t??? khi th??nh l???p. Sau m???t m??a ...
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid disableSpacing className={classes.gridItem} item md={4} sm={12}>
						<Card
							elevation={0}
							className={classes.root}
							component={RouterLink}
							to="/"
						>
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
									Hello Grade 1 ??? C??ng con t??? tin v??o
								</Typography>
								<Typography
									variant="h5"
									component="subtitle1"
									className={classes.cardSubtitle}
								>
									16 Th??ng M???t, 2019
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									Th???i gian: 09:00 ??? 12:00, ng??y 12/01/2019 (th??? 7) ?????a ??i???m:
									Tr?????ng Ti???u h???c MONA Kids, 319 C16 L?? Th?????ng Ki???t, Qu???n 11,
									TP.HCM N???u ??? b???c m???u gi??o, c??c ho???t ?????ng vui ch??i kh??m ph?? l??
									ch??? ?????o, c??c b??i h???c ...
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default News;
