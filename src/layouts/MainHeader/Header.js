import React, { useEffect } from "react";
import TopMenuButtonList from "./TopMenuButtonList";
import { orderCountSelect } from "../../states/orderSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./style.css";
import MobileMenu from "./MobileMenu";

const Header = function () {
	const orderCount = useSelector(orderCountSelect);
	const matches = window.matchMedia("(max-width: 500px)").matches;
	const history = useHistory();

	return (
		<div class="nav-section">
			<div class="navContainer">
				<TopMenuButtonList />
				<a
					onClick={() => {
						history.push(`/`);
					}}
				>
					<img class="logo" alt="Logo" src="/images/WaveLogo.png" />
				</a>
			</div>
		</div>
	);
};

export default Header;
