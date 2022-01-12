import React, { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrow.png";
import "./styles.css";
import homeBanner from "../../assets/images/homeBanner.png";
import homeBottomImg from "../../assets/images/homeBottomImg.png";
import Footer from "../../components/Footer";
import ArtistSlide from "./ArtistSlide";
import FadeInSection from "../../components/FadeInSection";
import { Carousel } from "3d-react-carousal";
import axios from "axios";
import { useHistory } from "react-router-dom";

import urls from "../../Constants/urls";

const Home = function () {
	const matches = window.matchMedia("(max-width: 500px)").matches;
	const [artistsData, setArtistsData] = useState([]);
	const [projectsData, setProjectsData] = useState([]);
	const [refresh, setRefresh] = useState(false);
	const [slides, setSlides] = useState([]);
	const [videos, setVideos] = useState([]);
	const history = useHistory();
	useEffect(() => {
		getArtistsData();
		getProjectsData();
		getVideo();
	}, []);

	const getVideo = () => {
		axios
			.get(`${urls.video}`)
			.then((response) => {
				if (response.status == 200) {
					console.log(response);
					setVideos(response.data);
				}
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	};

	const getArtistsData = () => {
		axios
			.get(`https://wavefoundation.co/api/artist/latest`)
			.then((response) => {
				if (response.status == 200) {
					setArtistsData(response.data);
					getSlides(response.data);
				}
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	};
	const getProjectsData = () => {
		axios
			.get(`https://wavefoundation.co/api/artist/release/latest`)
			.then((response) => {
				if (response.status == 200) {
					setProjectsData(response.data);
				}
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	};

	const getSlides = (data) => {
		let slides = [];
		data.map((artist) => {
			slides.push(<ArtistSlide artist={artist} />);
			setRefresh(true);
		});
		setSlides(slides);
	};

	return (
		<div class="home">
			<div class="banner">
				<div class="bannerImg">
					<img src={homeBanner} />
				</div>
			</div>
			{matches ? (
				<FadeInSection>
					<div id="#artists" class="h-artists-section">
						<h1>artists</h1>
						<div class="artist-slider">
							{refresh ? <Carousel slides={slides} /> : <></>}
							{/* {artistsData.map((artist) => {
								return <ArtistSlide artist={artist} />;
							})} */}
						</div>
					</div>
				</FadeInSection>
			) : (
				<FadeInSection>
					<div id="artists" class="h-artists-section">
						<h1>artists</h1>
						<div style={{ width: "90%", margin: "0 auto" }}>
							{refresh ? <Carousel slides={slides} /> : <></>}
						</div>
					</div>
				</FadeInSection>
			)}

			{/* projects section */}
			<FadeInSection>
				<div class="projects-section">
					<h1>Projects</h1>
					<div class="projects-container">
						{projectsData.map((item) => (
							<a
								target="blank"
								style={{ cursor: "pointer" }}
								href={item.link}
								class="single-project"
							>
								<div class="project-img">
									<img src={item.image} />
								</div>
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										padding: "0 10px",
									}}
								>
									<div style={{ display: "flex", alignItems: "center" }}>
										{item.artist_name}
										<a
											target="blank"
											style={{ cursor: "pointer" }}
											href={item.link}
										>
											<img
												style={{ width: "15px", marginRight: "5px" }}
												src={arrow}
											/>
										</a>
									</div>
									<span style={{ color: "#fff" }}>{item.name}</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</FadeInSection>

			{/* latest video */}
			<FadeInSection>
				<div class="bottom-img">
					{videos.map((item) => (
						<iframe
							src={`${item.video}`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					))}
				</div>
			</FadeInSection>
			<FadeInSection>
				<Footer />
			</FadeInSection>
		</div>
	);
};

export default Home;
