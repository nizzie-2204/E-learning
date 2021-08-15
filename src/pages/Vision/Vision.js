import React from "react";
import { Helmet } from "react-helmet";
import About from "components/Homepage/About/About";
import Breadcrumb from "components/Homepage/Breadcrumb/Breadcrumb";
import Footer from "components/Homepage/Footer/Footer";
import Header from "components/Homepage/Header/Header";
import { Container, makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
	container: {
		marginBottom: "100px",
		padding: "50px",
		border: "1px solid #ffb607",
	},
	title: {
		fontSize: "50px",
		fontWeight: "700",
		color: "#000",
		marginBottom: "20px",
		textTransform: "capitalize",
	},
	desc: {
		color: "#52575e",
		fontSize: "16px",
	},
});

const Vision = () => {
	const links = [
		{
			title: "Trang chủ",
			path: "/",
		},
		{
			title: "Giới thiệu",
			path: "/teacher",
		},
		{
			title: "Tầm nhìn và sứ mệnh",
			path: "/vision",
		},
	];

	const classes = useStyles();

	return (
		<>
			<Helmet>
				<title>Tầm nhìn và sứ mệnh - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Header />
			<Breadcrumb links={links} />
			<About />
			<div>
				<Container maxWidth="lg" className={classes.container}>
					<Typography variant="body2" component="h3" className={classes.title}>
						Tầm nhìn
					</Typography>
					<Typography
						className={classes.desc}
						variant="body2"
						component="p"
						style={{ marginBottom: "80px" }}
					>
						Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ
						nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày
						văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội
						dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn bản giống
						thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và
						dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và
						nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì sẽ khám phá ra
						nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều
						phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do
						cố ý (xen thêm vào những câu hài hước hay thông tục).
					</Typography>
					<Typography variant="body2" component="h3" className={classes.title}>
						Sứ mệnh
					</Typography>
					<Typography className={classes.desc} variant="body2" component="p">
						Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ
						nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày
						văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội
						dung kiểu “Nội dung, nội dung, nội dung” là nó khiến văn bản giống
						thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và
						dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và
						nếu bạn thử tìm các đoạn “Lorem ipsum” trên mạng thì sẽ khám phá ra
						nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều
						phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do
						cố ý (xen thêm vào những câu hài hước hay thông tục).
					</Typography>
				</Container>
			</div>
			<Footer />
		</>
	);
};

export default Vision;
