import React, { useEffect } from "react";
import { HeaderDiv, Nav, NavContainer } from "./HeaderStyled";
import TopMenuButtonList from "./TopMenuButtonList";
import { orderCountSelect } from "../../states/orderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.css";
import MobileMenu from "./MobileMenu";

const Header = function () {
	const orderCount = useSelector(orderCountSelect);
	const matches = window.matchMedia("(max-width: 500px)").matches;

	return (
		<HeaderDiv>
			{matches ? (
				<MobileMenu />
			) : (
				<Nav>
					<div class="navContainer">
						<img alt="Logo" src="/images/Design studio logo 1.png" />
						<TopMenuButtonList />
					</div>
					<div class="navContainer navContainerLeft">
						<Link to="/register">ورود / ثبت نام</Link>
					</div>
				</Nav>
			)}
		</HeaderDiv>
	);
};

export default Header;
