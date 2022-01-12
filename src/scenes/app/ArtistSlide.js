import React from "react";
import { useHistory } from "react-router-dom";

export default function ArtistSlide(artist) {
	const { image, name, description, releases, id } = artist.artist;
	const matches = window.matchMedia("(max-width: 500px)").matches;

	const history = useHistory();

	return (
		<div class="artist-slide">
			{!matches && (
				<div class="slide-info">
					{releases.map((item, i) => {
						if (i == 1) {
							return <span style={{ textAlign: "right" }}>{item.name}</span>;
						}
						if (i == 0 || i == 2) {
							return <span>{item.name}</span>;
						}
					})}
				</div>
			)}

			{matches ? (
				<div
					onClick={() => {
						history.push(`/artists/${id}`);
						window.scrollTo(0, 0);
					}}
					class="slide-image"
				>
					<img src={image} />
					<h4>{name}</h4>
				</div>
			) : (
				<div class="slide-image">
					<img src={image} />
					<div class="slide-image-text">
						<h1
							onClick={() => {
								history.push(`/artists/${id}`);
							}}
						>
							{name}
						</h1>
						<p>{description}</p>
					</div>
				</div>
			)}
		</div>
	);
}
