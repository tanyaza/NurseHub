import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = function () {
	return (
		<div class="banner">
			<div class="bannerImage">
				<img src="/images/bannerPic.png" alt="" />
			</div>
			<div class="bannerInfo">
				<h3>پرستار میخوای ؟</h3>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است. مجله در ستون و سطرآنچنان که لازم است و برای
					شرایط فعلی تکنولوژی
				</p>
				<button>
					<Link to="/products">بخش خدمات</Link>
				</button>
			</div>
		</div>
	);
};

export default Home;
