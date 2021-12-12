import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import navIcon from "../../assets/icons/navIcon.svg";

function MobileMenu() {
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
					<img alt="Logo" src="/images/vector.png" />
				</span>
				<img class="logo" alt="Logo" src="/images/WaveLogo.png" />
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
					))}
				</ul>
			</div>
		</div>
	);
}

export default MobileMenu;
