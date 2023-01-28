import React, { lazy, Suspense } from "react";
import styles from "../products/products.module.css";
import cuchilleria from "../../assets/img/cuchilleria-img.webp";
import almacen from "../../assets/img/almacen-img.webp";
import vinos from "../../assets/img/vinos-img.webp";
import chacinados from "../../assets/img/chacinados-img.webp";

/**
 * * Two interfaces who do the same thing
 * ? Indicates types of products component
 */
interface Props {
	isMainPage: boolean;
}

interface Product {
	img: string;
	title: string;
	description: string;
}

// * Array products
// ? Array of objects. Each one contains an image, a title and description.
// TODO: Change products
const products: Product[] = [
	{
		img: cuchilleria,
		title: "Chuchilleria",
		description:
			"Cuchillos hechos a mano con materiales de alta calidad y diseño único. Perfectos para cocina, actividades al aire libre y coleccionistas.",
	},
	{
		img: chacinados,
		title: "Chacinados",
		description:
			"Productos curados a mano con ingredientes de alta calidad y técnicas tradicionales. Perfectos para acompañar vinos, como aperitivo o para regalar.",
	},
	{
		img: almacen,
		title: "Almacén",
		description:
			"Una amplia variedad de productos de alta calidad, incluyendo opciones artesanales hechas a mano con ingredientes y técnicas tradicionales.",
	},
	{
		img: vinos,
		title: "Vinos",
		description:
			"Una amplia variedad de vinos de alta calidad, seleccionados cuidadosamente para ofrecer diferentes opciones de sabores y estilos. Perfectos para disfrutar en ocasiones especiales o para acompañar comidas.",
	},
];

const Product = lazy(() => import("../product/Product"));

/**
 * ? Component Products
 * @param isMainPage indicates if the component is rendering in the homePage or in the Products page. Is a boolean.
 * @returns Products main component
 */
function Products({ isMainPage }: Props) {
	return (
		<section className={styles.productsSectionContainer}>
			<h2>Nuestros productos</h2>
			<div className={styles.productsContainer}>
				<Suspense>
					{/* If it's rendering in HomePage only shows three products, else if it is rendering in the product page shows all products */}
					{isMainPage
						? products.map((product: Product, index: number) =>
							index < 3 ? (
								<Product
									name={product.title}
									img={product.img}
									description={product.description}
									key={index}
								/>
							) : null )
						: products.map((product: Product, index: number) => (
							<Product
								name={product.title}
								img={product.img}
								description={product.description}
								key={index}
							/>  ))}
				</Suspense>
			</div>
		</section>
	);
}

export default Products;
