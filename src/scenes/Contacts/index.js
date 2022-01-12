import React, { useState, useEffect } from "react";
import "./styles.css";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import axios from "axios";
import urls from "../../Constants/urls";
import "antd/dist/antd.css";
import { notification, Button } from "antd";
const Contacts = function () {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [reason, setReason] = useState("");
	const [captchaImg, setCaptchaImg] = useState("");
	const [captcha, setCaptcha] = useState("");
	const [key, setKey] = useState("");
	const [loading, setLoading] = useState(false);

	const openNotification = (message) => {
		notification.open({
			message: message,
			description: "",
		});
	};
	const refreshCaptcha = () => {
		axios
			.get(`${urls.captcha}`)
			.then((response) => {
				if (response.status == 200) {
					console.log(response);
					setCaptchaImg(response.data.img);
					setKey(response.data.key);
				}
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	};
	useEffect(() => {
		refreshCaptcha();
	}, []);

	const handleSubmit = () => {
		setLoading(true);
		const formData = new FormData();
		formData.append("name", name);
		formData.append("reason", reason);
		formData.append("email", email);
		formData.append("description", message);
		formData.append("captcha", captcha);
		formData.append("key", key);
		axios
			.post(`${urls.contact}`, formData)
			.then(function (response) {
				if (response.data.error == "false") {
					setLoading(false);
					openNotification("Thanks, We'll be!");
					setName("");
					setEmail("");
					setReason("");
					setMessage("");
					setCaptcha("");
				} else {
					setLoading(false);
					openNotification(response.data.message);
					setName("");
					setEmail("");
					setReason("");
					setMessage("");
					setCaptcha("");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
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
						<input
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
						></input>
					</div>
					<div class="form-input">
						<label>Email</label>
						<input
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						></input>
					</div>
					<div class="form-input">
						<label>Reason for contact</label>
						<input
							value={reason}
							onChange={(e) => {
								setReason(e.target.value);
							}}
						></input>
					</div>
					<div class="form-input">
						<label>Message</label>
						<input
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
						></input>
					</div>
				</form>
				<div class="captcha">
					<div
						style={{ display: "flex", width: "100%", justifyContent: "center" }}
					>
						<img style={{ maxWidth: "300px" }} src={captchaImg} />
						<button
							style={{ marginRight: "20px", fontSize: "14px" }}
							onClick={refreshCaptcha}
						>
							refresh
						</button>
					</div>

					<div class="form-input">
						<label>Captcha</label>
						<input
							value={captcha}
							onChange={(e) => {
								setCaptcha(e.target.value);
							}}
						></input>
					</div>
				</div>
				<Button loading={loading} onClick={handleSubmit}>
					send message
				</Button>
				{/* <button type="submit" onClick={handleSubmit}>
					send message
				</button> */}
			</div>
		</div>
	);
};

export default Contacts;
