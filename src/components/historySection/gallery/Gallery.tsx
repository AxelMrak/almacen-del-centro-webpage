import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import img1 from "../../../assets/img/carousel-1.webp";
import img2 from "../../../assets/img/carousel-2.webp";
import img3 from "../../../assets/img/carousel-3.webp";
import img4 from "../../../assets/img/carousel-4.webp";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

function Gallery() {
	return (
		<Carousel>
			{images.map((img, index) => (
				<img src={img.url} key={index} />
			))}
		</Carousel>
	);
}

export default Gallery;
