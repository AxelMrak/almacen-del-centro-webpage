import React from "react";
import Carousel from "react-responsive-carousel";
import img1 from "../../../assets/img/carousel-1.webp";
import img2 from "../../../assets/img/carousel-2.webp";
import img3 from "../../../assets/img/carousel-3.webp";
import img4 from "../../../assets/img/carousel-4.webp";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }];

function Gallery() {
	return (
		<Carousel showArrows={true}>
			{images.map((img, index) => {
				<div key={index}>
					<img src={img.url} />
				</div>;
			})}
		</Carousel>
	);
}

export default Gallery;
