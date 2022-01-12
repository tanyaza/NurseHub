import React, { useState, useEffect } from "react";
import { NavLink } from "./HeaderStyled";
import { Link } from "react-router-dom";
import navIcon from "../../assets/icons/navIcon.svg";
import { useHistory } from "react-router-dom";

const TopMenuButtonList = () => {
	const history = useHistory();
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
			route: "#artists",
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
			route: "/about",
		},
	];
	useEffect(() => {
		const pathname = window.location.pathname;
		if (pathname.includes("artists")) {
			handleButtonClick(2);
		}
		if (pathname.includes("contacts")) {
			handleButtonClick(3);
		}
		if (pathname.includes("about")) {
			handleButtonClick(4);
		}
	}, [window.location.pathname]);

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
					{btn.id == 2 ? (
						<a
							href="#artists"
							onClick={() => {
								history.push("/#artists");
								handleButtonClick(btn.id);
							}}
						>
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
						</a>
					) : (
						<Link
							to={btn.route}
							onClick={() => {
								handleButtonClick(btn.id);
								window.scrollTo(0, 0);
							}}
						>
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
					)}
				</NavLink>
			))}
		</div>
	);
};

export default TopMenuButtonList;
