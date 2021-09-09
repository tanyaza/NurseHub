import React from "react";
import {
	HeaderDiv,
	Nav,
	NavContainer,
	NavSearchBox,
	NavButtonContainer,
	NavButton,
	NavButtonMessage,
	Banner,
	BannerInfo,
	BannerImage,
} from "./HeaderStyled";
import TopMenuButtonList from "./TopMenuButtonList";
import { orderCountSelect } from "../../states/orderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = function () {
	const orderCount = useSelector(orderCountSelect);

	return (
		<HeaderDiv>
			<Nav>
				<NavContainer>
					<img alt="Logo" src="/images/Design studio logo 1.png" />
					<TopMenuButtonList />
				</NavContainer>
				<NavContainer left>
					<Link
						to="/login"
						// onClick={() => handleButtonClick(btn.id)}
					>
						ورود / ثبت نام
					</Link>
				</NavContainer>
			</Nav>
			<Banner>
				<BannerInfo>
					<h3>پرستار میخوای ؟</h3>
					<p>
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
						استفاده از طراحان گرافیک است. مجله در ستون و سطرآنچنان که لازم است و
						برای شرایط فعلی تکنولوژی
					</p>
					<button>بخش خدمات</button>
				</BannerInfo>
				<BannerImage>
					<img src="/images/bannerPic.png" alt="" />
				</BannerImage>
			</Banner>
		</HeaderDiv>
	);
};

export default Header;
