import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import navIcon from "../../assets/icons/navIcon.svg";
import { useHistory } from "react-router-dom";
import icon from "../../assets/images/Vector.png";

function MobileMenu() {
	const history = useHistory();
	useEffect(() => {
		const pathname = window.location.pathname;
		if (pathname.includes("artists")) {
			setActiveButtonId(2);
		}
		if (pathname.includes("contacts")) {
			setActiveButtonId(3);
		}
		if (pathname.includes("about")) {
			setActiveButtonId(4);
		}
	}, [window.location.pathname]);
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
	const defaultBtn = btnList[0];

	const [showMenu, setShowMenu] = useState(false);
	const [menuClass, setMenuClass] = useState("close");
	const [activeButtonId, setActiveButtonId] = useState(
		defaultBtn ? defaultBtn.id : null
	);

	const handleClick = () => {
		setShowMenu(!showMenu);
		{
			showMenu ? setMenuClass("open") : setMenuClass("close");
		}
	};
	const handleButtonClick = (id) => {
		setActiveButtonId(id);
		handleClick();
	};

	return (
		<div class="mobileMenu">
			<div className={` blur ${menuClass}`}></div>
			<div class=" mobileNav">
				<span
					style={{
						color: "#fff",
						fontSize: "20px",
					}}
					onClick={handleClick}
				>
					<img alt="Logo" src={icon} />
				</span>
				<a
					onClick={() => {
						history.push(`/`);
					}}
				>
					<img class="logo" alt="Logo" src="/images/WaveLogo.png" />
				</a>{" "}
			</div>

			<div className={` menuItems ${menuClass}`}>
				<span
					style={{ color: "#434343", marginBottom: "3rem" }}
					onClick={handleClick}
				>
					X
				</span>
				<ul>
					{btnList.map((btn) => (
						<div>
							{btn.id == 2 ? (
								<a
									href="#artists"
									onClick={() => {
										history.push("/#artists");
										handleButtonClick(btn.id);
									}}
								>
									{btn.title}
									{btn.id === activeButtonId ? (
										<span style={{ marginLeft: "10px" }}>
											<img src={navIcon} />
										</span>
									) : (
										<></>
									)}
								</a>
							) : (
								<Link to={btn.route} onClick={() => handleButtonClick(btn.id)}>
									{btn.title}
									{btn.id === activeButtonId ? (
										<span style={{ marginLeft: "10px" }}>
											<img src={navIcon} />
										</span>
									) : (
										<></>
									)}
								</Link>
							)}
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}

export default MobileMenu;
