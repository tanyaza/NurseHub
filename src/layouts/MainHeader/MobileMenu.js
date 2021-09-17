import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function MobileMenu() {
	const [showMenu, setShowMenu] = useState(false);
	const [menuClass, setMenuClass] = useState("close");
	const handleClick = () => {
		setShowMenu(!showMenu);
		{
			showMenu ? setMenuClass("open") : setMenuClass("close");
		}
	};
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
				<span style={{ margin: "0 auto", display: "flex" }}>
					<img alt="Logo" src="/images/Design studio logo 1.png" />
				</span>
				<div class="navContainer navContainerLeft">
					<Link to="/register">ورود / ثبت نام</Link>
				</div>
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
						<Link to={btn.route} onClick={() => handleClick()}>
							{btn.title}
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
}

export default MobileMenu;
