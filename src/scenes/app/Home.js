import React, { useEffect, useState } from "react";
import ProjectsData from "../../Constants/ProjectsData";
import arrow from "../../assets/icons/arrow.png";
import "./styles.css";
import homeBanner from "../../assets/images/homeBanner.png";
import homeBottomImg from "../../assets/images/homeBottomImg.png";
import Footer from "../../components/Footer";
import ArtistSlide from "./ArtistSlide";
import FadeInSection from "../../components/FadeInSection";
import { Carousel } from "3d-react-carousal";
import img1 from "../../assets/images/Artists/1.jpg";
import img2 from "../../assets/images/Artists/2.jpg";
import img3 from "../../assets/images/Artists/3.jpg";
import axios from "axios";
import urls from "../../Constants/urls";

const Home = function () {
	const matches = window.matchMedia("(max-width: 500px)").matches;

	useEffect(() => {
		getArtistsData();
		getProjectsData();
	}, []);

	const getArtistsData = () => {
		// axios.get('https://api.npms.io/v2/invalid-url')
		// .then(response => console.log(response))
		// .catch(error => {
		//     console.error('There was an error!', error);
		// });
	};
	const getProjectsData = () => {};

	let slides = [
		<ArtistSlide img={img1} />,
		<ArtistSlide img={img2} />,
		<ArtistSlide img={img3} />,
	];

	return (
		<div class="home">
			<div class="banner">
				<div class="bannerImg">
					<img src={homeBanner} />
				</div>
			</div>
			{matches ? (
				<FadeInSection>
					<div class="h-artists-section">
						<h1>artists</h1>
						<div class="artist-slider">
							<ArtistSlide img={img1} />,
							<ArtistSlide img={img2} />,
							<ArtistSlide img={img3} />,
						</div>
					</div>
				</FadeInSection>
			) : (
				<FadeInSection>
					<div class="h-artists-section">
						<h1>artists</h1>
						<div style={{ width: "90%", margin: "0 auto" }}>
							<Carousel slides={slides} />
						</div>
					</div>
				</FadeInSection>
			)}

			<FadeInSection>
				<div class="projects-section">
					<h1>Projects</h1>
					<div class="projects-container">
						{ProjectsData.map((item) => (
							<div class="single-project">
								<div class="project-img">{item.image}</div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										padding: "0 10px",
									}}
								>
									<div style={{ display: "flex", alignItems: "center" }}>
										{item.subTitle}
										<img
											style={{ width: "15px", marginRight: "5px" }}
											src={arrow}
										/>
									</div>
									<span style={{ color: "#fff" }}>{item.title}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</FadeInSection>

			<FadeInSection>
				<div class="bottom-img">
					<img src={homeBottomImg} />
				</div>
			</FadeInSection>
			<FadeInSection>
				<Footer />
			</FadeInSection>
		</div>
	);
};

export default Home;
