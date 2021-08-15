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
			title: "Trang chủ",
			path: "/",
		},
		{
			title: "Chương trình",
			path: "/teacher",
		},
		{
			title: "Tư vấn giáo dục",
			path: "/programs",
		},
	];
	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Tư vấn giáo dục - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<Container maxWidth="xl" className={classes.container}>
				<Typography className={classes.title} variant="h2">
					Các chương trình học
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
									Kỹ Năng Học Tập
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Trái với quan điểm chung của số đông, Lorem Ipsum không phải
									chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
									gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện
									từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000
									tuổi.
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
									Giáo Dục Kĩ Năng Sống
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Trái với quan điểm chung của số đông, Lorem Ipsum không phải
									chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
									gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện
									từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000
									tuổi.
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
									Khoa Học
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Trái với quan điểm chung của số đông, Lorem Ipsum không phải
									chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
									gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện
									từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000
									tuổi.
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
									Kết Nối Xã Hội
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Trái với quan điểm chung của số đông, Lorem Ipsum không phải
									chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
									gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện
									từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000
									tuổi.
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
									Âm Nhạc
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Trái với quan điểm chung của số đông, Lorem Ipsum không phải
									chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
									gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện
									từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000
									tuổi.
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
									Toán Học
								</Typography>
								<Typography
									className={classes.cartSubtitle}
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Trái với quan điểm chung của số đông, Lorem Ipsum không phải
									chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn
									gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện
									từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000
									tuổi.
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
