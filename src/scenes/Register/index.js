import React from "react";
import "./styles.css";

const Register = (props) => {
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
						<input></input>
					</div>
					{/* <div class="input-text-container">
						<span>شماره همراه باید با ۰ و ۹ شروع شود</span>
					</div> */}
					<button> تائید </button>
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
