import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import urls from "../../Constants/urls";

const Register = (props) => {
	const [mobile, setMobile] = useState("");
	const handleRegister = () => {
		axios
			.post(`https://api.nursehub.ir/Register/step1?phoneNumber=${mobile}`)
			.then((response) => {
				console.log(response);
			});
	};

	return (
		<div class="register-section">
			<div class="register-title">
				<h1> ورود یا ثبت نام</h1>
				<div class="title-line"></div>
			</div>
			<div class="register-box">
				<form>
					<div class="input-container">
						<label>شماره تلفن</label>
						<input
							value={mobile}
							onChange={(e) => {
								setMobile(e.target.value);
							}}
						></input>
					</div>
					{/* <div class="input-text-container">
						<span>شماره همراه باید با ۰ و ۹ شروع شود</span>
					</div> */}
					<button type="button" onClick={handleRegister}>
						تائید
					</button>
				</form>
				<p>
					با ورود و یا ثبت نام در Nurse Hub شما
					<span> شرایط و قوانین </span>
					استفاده از سرویس های Nurse Hub و <span> قوانین حریم خصوصی </span>
					آن را می‌پذیرید
				</p>
			</div>
		</div>
	);
};

export default Register;
