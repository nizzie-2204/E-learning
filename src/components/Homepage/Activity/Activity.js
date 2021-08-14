import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import bgImage from "assets/images/gallery-bg.jpg";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "assets/images/hoat_dong.jpg";
import image2 from "assets/images/hoat_dong_1.jpg";
import image3 from "assets/images/hoat_dong_2.jpg";
import image4 from "assets/images/hoat_dong_3.jpg";
import image6 from "assets/images/hoat_dong_5.jpg";
const activityStyle = makeStyles({
	activity: {
		padding: "40px 0",
		backgroundImage: `url(${bgImage})`,
	},
	activityTitle: {
		width: "100%",
		fontSize: "48px",
		fontWeight: "700",
		textAlign: "center",
		color: "#56225e",
		marginBottom: "60px",
	},
	activityImageContainer: {
		margin: "0 20px",
	},
	activityImage: {
		width: "90%",
		borderRadius: "50%",
	},
});

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 1280 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 1280, min: 960 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 960, min: 600 },
		items: 4,
	},
	mobile: {
		breakpoint: { max: 600, min: 0 },
		items: 2,
	},
};

const Activity = () => {
	const classes = activityStyle();

	return (
		<div className={classes.activity}>
			<Container maxWidth="xl">
				<Typography className={classes.activityTitle} variant="h2">
					Ảnh hoạt động
				</Typography>
				<Carousel
					additionalTransfrom={0}
					arrows
					// autoPlay
					autoPlaySpeed={1000}
					centerMode={true}
					containerClass="container-with-dots"
					draggable
					infinite
					keyBoardControl
					minimumTouchDrag={80}
					slidesToSlide={1}
					swipeable
					responsive={responsive}
				>
					<div className={classes.activityImageContainer}>
						<img
							src={image1}
							alt="activity"
							className={classes.activityImage}
						/>
					</div>
					<div className={classes.activityImageContainer}>
						<img
							src={image2}
							alt="activity"
							className={classes.activityImage}
						/>
					</div>
					<div className={classes.activityImageContainer}>
						<img
							src={image3}
							alt="activity"
							className={classes.activityImage}
						/>
					</div>
					<div className={classes.activityImageContainer}>
						<img
							src={image4}
							alt="activity"
							className={classes.activityImage}
						/>
					</div>
					<div className={classes.activityImageContainer}>
						<img
							src={image6}
							alt="activity"
							className={classes.activityImage}
						/>
					</div>
				</Carousel>
			</Container>
		</div>
	);
};

export default Activity;
