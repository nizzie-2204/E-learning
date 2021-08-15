import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import image1 from "assets/images/si-hoang_1.jpg";
import image3 from "assets/images/kim-dung.jpg";
import image2 from "assets/images/thanh-dien.jpg";
import React from "react";

const testimonialStyles = makeStyles((theme) => ({
	testimonial: {
		padding: "40px 0",
	},
	testimonialTitle: {
		width: "100%",
		fontSize: "48px",
		fontWeight: "700",
		textAlign: "center",
		color: "#000",
		marginBottom: "60px",
	},
	testimonialItem: {
		display: "flex",
		alignItems: "center",
	},
	testimonialImageContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: "auto",
	},
	testimonialImage: {
		width: "145px",
		height: "145px",
		objectFit: "cover",
		borderRadius: "50%",
		[theme.breakpoints.down("xs")]: {
			width: "450px",
			height: "450px",
		},
	},
	testimonialDesc: {
		height: "100%",
		display: "flex",
		alignItems: "center",
	},
	itemInfoTitle: {
		marginBottom: "10px",
		textAlign: "center",
	},
	itemInfoSubtitle: {
		fontSize: "15px",
		textAlign: "center",
	},
	testimonialGrid: {
		marginBottom: "40px",
		[theme.breakpoints.down("sm")]: {
			justifyContent: "center",
		},
	},
}));

const Testimonial = () => {
	const classes = testimonialStyles();

	return (
		<div className={classes.testimonial}>
			<Container maxWidth="xl">
				<Grid container>
					<Typography className={classes.testimonialTitle} variant="h2">
						Phụ Huynh Nói Gì
					</Typography>
					<Grid item container className={classes.testimonialGrid} spacing={4}>
						<Grid item sm={2}>
							<div className={classes.testimonialImageContainer}>
								<img
									src={image1}
									alt="parents"
									className={classes.testimonialImage}
								/>
							</div>
						</Grid>
						<Grid item sm={8}>
							<div className={classes.testimonialDesc}>
								<div className={classes.itemInfo}>
									<Typography variant="h6" className={classes.itemInfoTitle}>
										Anh Nhựt Tân.Thạc sỹ Nghệ Thuật,Nhà thiết kế thời trang
										<br />
										Phụ huynh bé Tâm
									</Typography>
									<Typography
										variant="body2"
										className={classes.itemInfoSubtitle}
									>
										Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc
										và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu
										tố
										<br />
										trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
										văn bản chỉ gồm
									</Typography>
								</div>
							</div>
						</Grid>
					</Grid>

					<Grid item container className={classes.testimonialGrid} spacing={4}>
						<Grid item md={3} sm={2}>
							<div className={classes.testimonialImageContainer}>
								<img
									src={image2}
									alt="parents"
									className={classes.testimonialImage}
								/>
							</div>
						</Grid>
						<Grid item sm={8}>
							<div className={classes.testimonialDesc}>
								<div className={classes.itemInfo}>
									<Typography variant="h6" className={classes.itemInfoTitle}>
										Anh Nhựt Tân.Thạc sỹ Nghệ Thuật,Nhà thiết kế thời trang
										<br />
										Phụ huynh bé Tâm
									</Typography>
									<Typography
										variant="body2"
										className={classes.itemInfoSubtitle}
									>
										Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc
										và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu
										tố
										<br />
										trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
										văn bản chỉ gồm
									</Typography>
								</div>
							</div>
						</Grid>
					</Grid>

					<Grid item container className={classes.testimonialGrid} spacing={4}>
						<Grid item md={4} sm={2}>
							<div className={classes.testimonialImageContainer}>
								<img
									src={image3}
									alt="parents"
									className={classes.testimonialImage}
								/>
							</div>
						</Grid>
						<Grid item sm={8}>
							<div className={classes.testimonialDesc}>
								<div className={classes.itemInfo}>
									<Typography variant="h6" className={classes.itemInfoTitle}>
										Anh Nhựt Tân.Thạc sỹ Nghệ Thuật,Nhà thiết kế thời trang
										<br />
										Phụ huynh bé Tâm
									</Typography>
									<Typography
										variant="body2"
										className={classes.itemInfoSubtitle}
									>
										Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc
										và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu
										tố
										<br />
										trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn
										văn bản chỉ gồm
									</Typography>
								</div>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Testimonial;
