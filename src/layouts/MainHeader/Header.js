import React from "react";
import { HeaderDiv, Nav, NavContainer } from "./HeaderStyled";
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
					<Link to="/register">ورود / ثبت نام</Link>
				</NavContainer>
			</Nav>
		</HeaderDiv>
	);
};

export default Header;
