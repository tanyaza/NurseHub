import React from "react";
import "./styles.css";

const ProductsInfo = function ({ singleProduct }) {
	return (
		<div class="products-info">
			<div class="info-input-container">
				<label for="country">استان</label>
				<select id="country" name="country">
					<option value="australia">تهران</option>
					<option value="canada">تهران</option>
					<option value="usa">تهران</option>
				</select>
			</div>
			<div class="second-row">
				<div class="info-input-container">
					<label for="country">شهر</label>
					<select id="country" name="country">
						<option value="australia">تهران</option>
						<option value="canada">تهران</option>
						<option value="usa">تهران</option>
					</select>
				</div>
				<div class="info-input-container">
					<label for="country">محله</label>
					<select id="country" name="country">
						<option value="australia">تهران</option>
						<option value="canada">تهران</option>
						<option value="usa">تهران</option>
					</select>
				</div>
			</div>
			<button>ثبت درخواست </button>
		</div>
	);
};

export default ProductsInfo;
