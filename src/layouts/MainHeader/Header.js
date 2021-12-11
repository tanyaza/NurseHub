import React, { useEffect } from "react";
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
		<div class="nav-section">
			<div class="navContainer">
				<TopMenuButtonList />
				<img class="logo" alt="Logo" src="/images/WaveLogo.png" />
			</div>
		</div>
	);
};

export default Header;
