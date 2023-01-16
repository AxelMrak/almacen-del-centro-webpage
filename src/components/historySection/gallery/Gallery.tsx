import React from "react";
import styles from "../gallery/gallery.module.css";
import img1 from "../../../assets/img/carousel-1.webp";
import img2 from "../../../assets/img/carousel-2.webp";
import img3 from "../../../assets/img/carousel-3.webp";
import img4 from "../../../assets/img/carousel-4.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

/**
 * This component will be included in About
 * @returns Gallery component
 */
function Gallery() {
	return (
		<div className={styles.galleryMainContainer}>
			<h3>Galería</h3>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				autoplay
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className={styles.mySwiper}
			>
				<SwiperSlide>
					<img src={img1} width="500" height="300" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} width="500" height="300" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} width="500" height="300" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img4} width="500" height="300" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Gallery;
