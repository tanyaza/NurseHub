import React from "react";
import img1 from "../../assets/images/Artists/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

export default function ArtistSlide({ img }) {
	return (
		<div class="artist-slide">
			<div class="slide-info">
				<span>mowj</span>
				<span style={{ textAlign: "right" }}>sargije</span>
				<span>farda</span>
			</div>
			<div class="slide-image">
				<img src={img} />
				<div class="slide-image-text">
					<h1>isam</h1>
					<p>
						Sam officially joined Wave Foundation in 2020, where he quickly
						scored his biggest hit to date with ‘Sargije.’ In addition to his
						prolific solo career
					</p>
				</div>
			</div>
		</div>
	);
}
