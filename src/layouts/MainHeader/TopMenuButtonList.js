import React, { useState } from "react";
import { NavLink } from "./HeaderStyled";
import { Link } from "react-router-dom";

const TopMenuButtonList = () => {
	const btnList = [
		{
			id: 1,
			title: "صفحه اصلی",
			isDefault: true,
			route: "/",
		},
		{
			id: 2,
			title: "درباره ما",
			isDefault: false,
			route: "/about",
		},
		{
			id: 3,
			title: "خدمات",
			isDefault: false,
			route: "/products",
		},
	];

	const defaultBtn = btnList[0];
	const [activeButtonId, setActiveButtonId] = useState(
		defaultBtn ? defaultBtn.id : null
	);

	const handleButtonClick = (id) => {
		setActiveButtonId(id);
	};

	return (
		<>
			{btnList.map((btn) => (
				<NavLink key={btn.id} active={btn.id === activeButtonId}>
					<Link to={btn.route} onClick={() => handleButtonClick(btn.id)}>
						{btn.title}
					</Link>
				</NavLink>
			))}
		</>
	);
};

export default TopMenuButtonList;
