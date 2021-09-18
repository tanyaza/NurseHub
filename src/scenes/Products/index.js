import React, { useState } from "react";
import "./styles.css";
import Product from "./Product";
import ProductsData from "../../Constants/ProductsData";
import ProductsInfo from "./ProductsInfo";
const Products = function () {
	const [back, setBack] = useState(true);
	const matches = window.matchMedia("(max-width: 500px)").matches;
	const handleGoBack = () => {
		setBack(!back);
	};
	return (
		<div class="products-section">
			{matches ? (
				<div className={`products-modal ${back ? "hideModal" : "showModal"}`}>
					<span onClick={handleGoBack} class="back">
						بازگشت
						<img src="/images/back.png" />
					</span>
					<div class="products-title">
						<h1> لیست خدمات درخواستی</h1>
						<div class="title-line"></div>
					</div>
					<div class="single-product">
						<h3>معاینه بیماری های خفیف</h3>
						<span>x</span>
					</div>
				</div>
			) : (
				<div></div>
			)}

			<div class="products-title">
				<h1> خدمات پرستاری </h1>
				<div class="title-line"></div>
			</div>
			<div class="products-content">
				<button
					onClick={() => {
						setBack(false);
					}}
				>
					open{" "}
				</button>
				<ProductsInfo />

				<div class="products">
					{ProductsData.map((product) => (
						<Product singleProduct={product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
