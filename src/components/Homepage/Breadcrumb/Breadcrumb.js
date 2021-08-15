import { Typography } from "@material-ui/core";
import { Breadcrumbs } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import bgImage from "assets/images/inner_title_bg.jpg";

const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: "89px",
		padding: "40px 0",
		backgroundImage: `url(${bgImage})`,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	title: {
		fontSize: "28px",
		fontWeight: "700",
		color: "#fff",
		marginBottom: "20px",
		textTransform: "capitalize",
	},
	link: {
		fontSize: "16px",
		color: "#fff",
		textDecoration: "none",
		textTransform: "uppercase",
	},
}));

const Breadcrumb = ({ title, links }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Typography className={classes.title}>
				{links[links.length - 1].title}
			</Typography>
			<Breadcrumbs aria-label="breadcrumb" className={classes.link}>
				{links.map((link) => {
					return (
						<Link to={link.path} className={classes.link}>
							{link.title}
						</Link>
					);
				})}
			</Breadcrumbs>
		</div>
	);
};

export default Breadcrumb;
