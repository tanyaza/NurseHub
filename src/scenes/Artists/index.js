import React from "react";
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
import release4 from "../../assets/images/Artists/release4.png";
import homeBottomImg from "../../assets/images/homeBottomImg.png";
import FadeInSection from "../../components/FadeInSection";

import pinkFlash from "../../assets/icons/arrowPink.png";

export default function About() {
	const matches = window.matchMedia("(max-width: 500px)").matches;

	return (
		<section className="artists-section">
			<div class="artist-img">
				{matches ? <img src={headerMob} /> : <img src={header} />}
				<span>isam</span>
			</div>
			<FadeInSection>
				<div class="social-container">
					<div class="social-icon">
						<img src={spotify} />
					</div>
					<div class="social-icon">
						<img src={music} />
					</div>
					<div class="social-icon">
						<img src={soundcloud} />
					</div>
					<div class="social-icon">
						<img src={instagram} />
					</div>
					<div class="social-icon">
						<img src={twitter} />
					</div>
				</div>
			</FadeInSection>

			{matches && (
				<div class="artist-about">
					<h3>about</h3>
					<div class="about-items">
						<div class="about-item">
							<h2>Country</h2>
							<span>nj, usa</span>
						</div>
						<div class="about-item">
							<h2>year joined</h2>
							<span>2019</span>
						</div>
						<div class="about-item">
							<h2>occupation(s)</h2>
							<span style={{ textTransform: "capitalize" }}>
								rapper
								<br />
								producer
								<br />
								songwritter
							</span>
						</div>
					</div>
				</div>
			)}
			<FadeInSection>
				{" "}
				<div class="artist-info">
					<p>
						19 year old artist and producer Nick Moleta offers a variety of
						melodic layers. Smooth vocals and
						<span style={{ color: "#FA5570" }}> synth patterns </span>
						over hard hitting trap percussion reveals similarity to the sounds
						of
						<span style={{ textDecoration: "underline" }}> Lil Mosey </span> ,
						<span style={{ textDecoration: "underline" }}> Xavier Weeks </span>
						and
						<span style={{ textDecoration: "underline" }}> Jack Harlow </span>.
						From the bedroom trap style on “For the Weekend (feat. Rohan)” to
						the retro wave sampled melody on “The One (feat. Fetty Wap)” Moleta
						offers a
						<span style={{ color: "#FA5570" }}>
							{" "}
							wide range of capabilities.{" "}
						</span>
						Born in Miami, FL, raised in Ridgewood, NJ, the rapper / producer
						learned to make melodies and drum patterns quickly.
					</p>
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
							{" "}
							<img style={{ width: "100%", height: "100%" }} src={img2} />
						</div>
					) : (
						<>
							{" "}
							<br />
							<br />
							<br />
						</>
					)}

					<p>
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
					</p>
				</div>
			</FadeInSection>

			<FadeInSection>
				<div class="artist-photos">
					<img src={img1} />
					<img src={img3} />
					<img src={img2} />
				</div>
			</FadeInSection>

			<FadeInSection>
				<div class="artist-releases">
					<h3>releases</h3>
					<div class="release-items">
						<div class="release-item">
							<a class="release-img-container">
								<img class="release-img" src={release1} />
								<div class="release-flash">
									<img src={pinkFlash} />
								</div>
							</a>
							<h4>sargije</h4>
						</div>
						<div class="release-item">
							<a class="release-img-container">
								<img class="release-img" src={release2} />
								<div class="release-flash">
									<img src={pinkFlash} />
								</div>
							</a>
							<h4>bade to</h4>
						</div>
						<div class="release-item">
							<a class="release-img-container">
								<img class="release-img" src={release3} />
								<div class="release-flash">
									<img src={pinkFlash} />
								</div>
							</a>
							<h4>neverland</h4>
						</div>
						<div class="release-item">
							<a class="release-img-container">
								<img class="release-img" src={release1} />
								<div class="release-flash">
									<img src={pinkFlash} />
								</div>
							</a>
							<h4>tbab</h4>
						</div>
					</div>
				</div>
			</FadeInSection>

			{!matches && (
				<div class="artist-about">
					<h3>about</h3>
					<div class="about-items">
						<div class="about-item">
							<h2>Country</h2>
							<span>nj, usa</span>
						</div>
						<div class="about-item">
							<h2>year joined</h2>
							<span>2019</span>
						</div>
						<div class="about-item">
							<h2>occupation(s)</h2>
							<span style={{ textTransform: "capitalize" }}>
								rapper
								<br />
								producer
								<br />
								songwritter
							</span>
						</div>
					</div>
				</div>
			)}
			<FadeInSection>
				<div class="artist-latestVideo">
					<h2>Latest videos</h2>
					<div style={{ background: "transparent" }} class="bottom-img">
						<img src={homeBottomImg} />
					</div>
				</div>
			</FadeInSection>
		</section>
	);
}
