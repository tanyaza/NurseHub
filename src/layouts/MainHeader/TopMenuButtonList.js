import React, { useState } from "react";
import { NavLink } from "./HeaderStyled";
import { Link } from "react-router-dom";
import navIcon from "../../assets/icons/navIcon.svg";

const TopMenuButtonList = () => {
	const btnList = [
		{
			id: 1,
			title: "Home",
			isDefault: true,
			route: "/",
		},
		{
			id: 2,
			title: "Artists",
			isDefault: false,
			route: "/artists",
		},
		{
			id: 3,
			title: "Contacts",
			isDefault: false,
			route: "/contacts",
		},
		{
			id: 4,
			title: "About",
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
		<div className="topMenuButtons">
			{btnList.map((btn) => (
				<NavLink key={btn.id} active={btn.id === activeButtonId}>
					<Link to={btn.route} onClick={() => handleButtonClick(btn.id)}>
						<div style={{ display: "flex" }}>
							{btn.title}
							{btn.id === activeButtonId ? (
								<span>
									<img src={navIcon} />
								</span>
							) : (
								<></>
							)}
						</div>
					</Link>
				</NavLink>
			))}
		</div>
	);
};

export default TopMenuButtonList;
