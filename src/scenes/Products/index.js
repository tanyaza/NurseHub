import React from "react";
import "./styles.css";
import Product from "./Product";
import ProductsData from "../../Constants/ProductsData";
const Products = function () {
	return (
		<div class="products-section">
			<div class="products-title">
				<h1> خدمات پرستاری </h1>
				<div class="title-line"></div>
			</div>
			<div class="products-content">
				<div class="products-info"></div>
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
