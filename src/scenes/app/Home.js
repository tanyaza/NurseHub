import React from "react";
import { Link } from "react-router-dom";
import {
	Banner,
	BannerInfo,
	BannerImage,
} from "../../layouts/MainHeader/HeaderStyled";

const Home = function () {
	return (
		<Banner>
			<BannerInfo>
				<h3>پرستار میخوای ؟</h3>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است. مجله در ستون و سطرآنچنان که لازم است و برای
					شرایط فعلی تکنولوژی
				</p>
				<button>
					<Link to="/products">بخش خدمات</Link>
				</button>
			</BannerInfo>
			<BannerImage>
				<img src="/images/bannerPic.png" alt="" />
			</BannerImage>
		</Banner>
	);
};

export default Home;
