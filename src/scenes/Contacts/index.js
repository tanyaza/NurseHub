import React, { useState } from "react";
import "./styles.css";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
const Contacts = function () {
	const [back, setBack] = useState(true);
	const matches = window.matchMedia("(max-width: 500px)").matches;
	const handleGoBack = () => {
		setBack(!back);
	};
	return (
		<div class="contacts-section">
			<div class="contact-info">
				<div class="contact-info-row">
					<h3>Email</h3>
					<span>INFO@WAVEFOUNDATION.CO</span>
				</div>
				<div class="contact-info-row">
					<h3>Social</h3>
					<div>
						<span>
							<img src={twitter} />
						</span>
						<span>wavefoundation</span>
					</div>
					<div>
						<span>
							<img src={instagram} />
						</span>
						<span>wavefoundation</span>
					</div>
				</div>
			</div>

			<div class="contact-form">
				<form>
					<div class="form-input">
						<label>Name</label>
						<input></input>
					</div>
					<div class="form-input">
						<label>Email</label>
						<input></input>
					</div>
					<div class="form-input">
						<label>Reason for contact</label>
						<input></input>
					</div>
					<div class="form-input">
						<label>Message</label>
						<input></input>
					</div>
				</form>
				<button>send message</button>
			</div>
		</div>
	);
};

export default Contacts;
