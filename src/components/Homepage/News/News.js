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
					Tin tức tháng 10
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
									Lịch sử, không còn là môn học “khó nhằn”nữa…
								</Typography>
								<Typography
									variant="h5"
									component="subtitle1"
									className={classes.cardSubtitle}
								>
									16 Tháng Một, 2019
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									Vào một chiều cuối thu, có một cậu học trò đến bên cạnh tôi
									thì thầm nói: “ Cô ơi! Con rất thích học Lịch Sử nhưng con lại
									không thích phải thi cô ạ. Những câu hỏi phải trả ...
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
									Back to school: Chào mừng ngày tựu trường năm học
								</Typography>
								<Typography
									variant="h5"
									component="subtitle1"
									className={classes.cardSubtitle}
								>
									16 Tháng Một, 2019
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									Năm học 2018 – 2019 là năm học vô cùng ý nghĩa và đặc biệt đối
									với Trường Mần Non MONA Kids vì đây là năm học thứ 10 của MONA
									Kids kể từ khi thành lập. Sau một mùa ...
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
									Hello Grade 1 – Cùng con tự tin vào
								</Typography>
								<Typography
									variant="h5"
									component="subtitle1"
									className={classes.cardSubtitle}
								>
									16 Tháng Một, 2019
								</Typography>
								<Typography
									variant="body2"
									component="p"
									className={classes.cardDesc}
								>
									Thời gian: 09:00 – 12:00, ngày 12/01/2019 (thứ 7) Địa điểm:
									Trường Tiểu học MONA Kids, 319 C16 Lý Thường Kiệt, Quận 11,
									TP.HCM Nếu ở bậc mẫu giáo, các hoạt động vui chơi khám phá là
									chủ đạo, các bài học ...
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
