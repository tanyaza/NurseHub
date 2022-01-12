import React, { useEffect, useState } from "react";
import "./styles.css";
import header from "../../assets/images/Artists/header.png";
import headerMob from "../../assets/images/Artists/headerMob.png";
import twitter from "../../assets/icons/artistsIcon/twitter.png";
import instagram from "../../assets/icons/artistsIcon/instagram.png";
import music from "../../assets/icons/artistsIcon/music.png";
import spotify from "../../assets/icons/artistsIcon/spotify.png";
import soundcloud from "../../assets/icons/artistsIcon/soundcloud.png";
import img1 from "../../assets/images/Artists/1.jpg";
import img2 from "../../assets/images/Artists/2.jpg";
import img3 from "../../assets/images/Artists/3.jpg";
import release1 from "../../assets/images/Artists/release1.png";
import release2 from "../../assets/images/Artists/release2.png";
import release3 from "../../assets/images/Artists/release3.png";
import homeBottomImg from "../../assets/images/homeBottomImg.png";
import FadeInSection from "../../components/FadeInSection";
import pinkFlash from "../../assets/icons/arrowPink.png";
import axios from "axios";
import urls from "../../Constants/urls";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

export default function About() {
	const matches = window.matchMedia("(max-width: 500px)").matches;
	const [artistData, setArtistData] = useState({
		abouts: [],
		images: [],
		releases: [],
		videos: [],
		links: [],
	});
	const { id } = useParams();

	const getArtistData = () => {
		axios
			.get(`${urls.artistInfo}/${id}`)
			.then((response) => {
				if (response.status == 200) {
					setArtistData(response.data);
					console.log(response);
				}
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	};

	useEffect(() => {
		getArtistData();
	}, []);

	return (
		<section className="artists-section">
			<div class="artist-img">
				<img src={artistData.big_cover} />
				<span>{artistData.name}</span>
			</div>

			{/* artist socials */}
			<FadeInSection>
				<div class="social-container">
					{artistData.links.map((item) => {
						if (item.name == "Instagram") {
							return (
								<div class="social-icon">
									<a target="blank" href={item.link}>
										<img src={instagram} />
									</a>
								</div>
							);
						}
						if (item.name == "Twitter") {
							return (
								<div class="social-icon">
									<a target="blank" href={item.link}>
										<img src={twitter} />
									</a>
								</div>
							);
						}
						if (item.name == "Spotify") {
							return (
								<div class="social-icon">
									<a target="blank" href={item.link}>
										<img src={spotify} />
									</a>
								</div>
							);
						}
						if (item.name == "Apple Music") {
							return (
								<div class="social-icon">
									<a target="_blank" href={item.link}>
										<img src={music} />
									</a>
								</div>
							);
						}
					})}
				</div>
			</FadeInSection>

			{matches && (
				<div class="artist-about">
					<h3 style={{ color: "#fff" }}>about</h3>
					<div class="about-items">
						{artistData.abouts.map((item) => (
							<div class="about-item">
								<h2>{item.attribute}</h2>
								<span>{item.value}</span>
							</div>
						))}
					</div>
				</div>
			)}
			{/* artist descriptions */}
			<FadeInSection>
				{" "}
				<div class="artist-info">
					<p>{artistData.description}</p>

					{matches ? (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								margin: "50px auto",
								maxHeight: "400px",
								maxWidth: "300px",
							}}
						>
							{artistData.images.map((item, i) => {
								if (i == 0) {
									return (
										<img
											style={{
												width: "100%",
												height: "100%",
												maxHeight: "400px",
												objectFit: "cover",
											}}
											src={item.image}
										/>
									);
								}
							})}
						</div>
					) : (
						<>
							{" "}
							<br />
							<br />
							<br />
						</>
					)}
					<p>{artistData.brief_description}</p>

					{/* <p>
						In 2016 Moleta began to create his own beats and cover rap songs by
						posting them on SoundCloud, earning the interests of his classmates.
						Students began to encourage Nick to pursue writing his own songs on
						his beats then post them. In 2017, Nick released his first rough
						single on <span style={{ color: "#FA5570" }}> SoundCloud </span>
						which attracted more students than his remixes had. One year later
						in 2018, Nick held his first concert in Waldwick, NJ sponsored by
						Steve Madden. Today, “The One”, featuring multi platinum artist
						Fetty Wap has released on all platforms under Hidden Hill Recordings
						and 300 Entertainment.
					</p> */}
				</div>
			</FadeInSection>

			{/* artist images */}
			{matches ? (
				<FadeInSection>
					<div class="artist-photos">
						{artistData.images.map((item, i) => {
							if (i != 0) {
								return <img src={item.image} />;
							}
						})}
					</div>
				</FadeInSection>
			) : (
				<FadeInSection>
					<div class="artist-photos">
						{artistData.images.map((item) => (
							<img src={item.image} />
						))}
					</div>
				</FadeInSection>
			)}

			{/* artist releases */}
			<FadeInSection>
				<div class="artist-releases">
					<h3 style={{ color: "#fff" }}>releases</h3>
					<div class="release-items">
						{artistData.releases.map((item) => (
							<div class="release-item">
								<a href={item.link} class="release-img-container">
									<img class="release-img" src={item.image} />
									<div class="release-flash">
										<img src={pinkFlash} />
									</div>
								</a>
								<h4>{item.name}</h4>
							</div>
						))}
					</div>
				</div>
			</FadeInSection>

			{!matches && (
				<div class="artist-about">
					<h3 style={{ color: "#fff" }}>about</h3>
					<div class="about-items">
						{artistData.abouts.map((item) => (
							<div class="about-item">
								<h2>{item.attribute}</h2>
								<span>{item.value}</span>
							</div>
						))}
					</div>
				</div>
			)}
			<FadeInSection>
				<div class="artist-latestVideo">
					<h2>Latest videos</h2>
					<div style={{ background: "transparent" }} class="bottom-img">
						{artistData.videos.map((item) => (
							<iframe
								src={`${item.link}`}
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								title="Embedded youtube"
							/>
						))}
					</div>
				</div>
			</FadeInSection>
			<FadeInSection>
				<Footer />
			</FadeInSection>
		</section>
	);
}
