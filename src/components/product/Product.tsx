import styles from '../product/product.module.css';

interface Props {
	name: string;
	img: string;
	description: string;
}

/**
 * ? Component unit Product. It will include in Products.
 * @param param0 Name: Name's product, Img: Image url, Description: Description's product: ALL STRINGS
 * @returns Single product component
 */
function Product({ name, img, description }: Props) {
	return (
		<div className={styles.productMainContainer}>
			<img src={img} width="300" height="250" alt={name} />
			<h3>{name}</h3>
			<p>{description}</p>
			<a href={`https://wa.me/542657584728?text=Hola%2C%20he%20visto%20este%20producto%20(${name})%20en%20su%20p%C3%A1gina%20web%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s.`} target="_blank" rel="noreferrer">
				Consúltenos
			</a>
		</div>
	);
}

export default Product;
