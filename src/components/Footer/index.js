import React from "react";
import homeBanner from "../../assets/images/homeBanner.png";
import TopMenuButtonList from "../../layouts/MainHeader/TopMenuButtonList";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import "./index.css";

export default function Footer() {
	return (
		<div class="footer-section">
			<div class="footer-firstRow">
				<img src={homeBanner} />
				<TopMenuButtonList />
			</div>
			<div class="footer-secondRow">
				<div class="footer-secondRow-column">
					<h3>Follow Us</h3>
					<div style={{ display: "flex" }}>
						<div class="footer-icon">
							<span>twitter</span>

							<span>
								<img src={twitter} />
							</span>
						</div>
						<div class="footer-icon">
							<span>instagram</span>

							<span>
								<img src={instagram} />
							</span>
						</div>
					</div>
				</div>
				<div class="footer-secondRow-column">
					<h3>Email</h3>
					<span>INFO@WAVEFOUNDATION.CO</span>
				</div>
			</div>
			<div class="footer-thirdRow">
				<span style={{ color: "hsl(0, 0%, 70%)" }}>
					Can we
					<span
						style={{ textDecoration: "underline", color: "hsl(0, 0%, 70%)" }}
					>
						{" "}
						talk{" "}
					</span>
					for a minute?
				</span>
				<span>Wave Foundation ©2021. All Rights Reserved</span>
			</div>
		</div>
	);
}
