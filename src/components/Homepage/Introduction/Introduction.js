import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { Container, Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/styles";
import React from "react";
import image1 from "assets/images/teacher.png";
import image2 from "assets/images/book.png";
import image3 from "assets/images/support.png";
import image4 from "assets/images/scholarship.png";

const introStyle = makeStyles((theme) => ({
	introduction: {
		[theme.breakpoints.down("sm")]: {
			paddingTop: theme.spacing(15),
		},
	},
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	grid: {
		position: "relative",
		top: "-40px",
		left: "0",
	},
	gridItem: {
		marginBottom: "50px",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#ffb607",
		overflow: "visible",
		height: "100%",
	},
	cardHeader: {
		width: "130px",
		height: "130px",
		borderRadius: "50%",
		background: "#fff",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transform: "translateY(-70px)",
		marginBottom: "-40px",
	},
	cardMedia: {
		maxWidth: "75px",
		maxHeight: "75px",
		objectFit: "cover",
	},
	cartTitle: {
		fontSize: "24px",
		fontWeight: "700",
		color: "#fff",
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
		color: "#fff",
		textAlign: "center",
	},
}));

const Introduction = () => {
	const classes = introStyle();

	return (
		<div className={classes.introduction}>
			<Container maxWidth="xl" className={classes.container}>
				<Grid container spacing={4} className={classes.grid}>
					<Grid item lg={3} md={3} sm={6} xs={12} className={classes.gridItem}>
						<Card classes={{ root: classes.card }}>
							<div className={classes.cardHeader}>
								<CardMedia
									component="img"
									className={classes.cardMedia}
									image={image1}
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
									Gi??o vi??n
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Gi??o vi??n h?????ng d???n k??m c???p 1-1 m???i em
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item lg={3} md={3} sm={6} xs={12} className={classes.gridItem}>
						<Card
							classes={{ root: classes.card }}
							style={{ backgroundColor: "#ff002a" }}
						>
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
									Ch???t l?????ng gi???ng d???y
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									????o t???o theo ti??u chu???n qu???c t???
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item lg={3} md={3} sm={6} xs={12} className={classes.gridItem}>
						<Card
							classes={{ root: classes.card }}
							style={{ backgroundColor: "#003d69" }}
						>
							<div className={classes.cardHeader}>
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
									?????m b???o ?????u ra
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									M??i tr?????ng gi??o d???c h??ng ?????u cho tr??? em
								</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item lg={3} md={3} sm={6} xs={12} className={classes.gridItem}>
						<Card
							classes={{ root: classes.card }}
							style={{ backgroundColor: "#3db2d5" }}
						>
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
									M??i tr?????ng n??ng ?????ng
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									C??ng ch??ng t??i kh??m ph?? ti???m n??ng c???a con tr???
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Introduction;
