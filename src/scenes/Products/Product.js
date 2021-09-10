import React from "react";
import "./styles.css";

const Product = function ({ singleProduct }) {
	return (
		<div class="single-product">
			<div class="icon">
				<img src={singleProduct.icon} />
			</div>
			<h1>{singleProduct.title}</h1>
			<h4>{singleProduct.subTitle}</h4>
			<div>
				<button>+</button>
				<span>افزودن خدمت</span>
			</div>
		</div>
	);
};

export default Product;
