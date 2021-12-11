import React from "react";
import ProjectsData from "../../Constants/ProjectsData";
import arrow from "../../assets/icons/arrow.png";
import "./styles.css";
import homeBanner from "../../assets/images/homeBanner.png";
import homeBottomImg from "../../assets/images/homeBottomImg.png";
import Footer from "../../components/Footer";
import Swiper from "react-id-swiper";
import ArtistSlide from "./ArtistSlide";

const Home = function () {
	return (
		<div class="home">
			<div class="banner">
				<div class="bannerImg">
					<img src={homeBanner} />
				</div>
			</div>

			<div class="h-artists-section">
				<h1>artists</h1>
				<div class="artist-slider">
					<ArtistSlide />\{" "}
				</div>
			</div>
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
			<div class="bottom-img">
				<img src={homeBottomImg} />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
