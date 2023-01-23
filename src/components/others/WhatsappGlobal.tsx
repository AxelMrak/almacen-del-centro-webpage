import whatsapp from "../../assets/svg/whatsapp96.svg";
import "./whatsappGlobal.css";

const WhatsappGlobal = () => (
	<div className="whatsapp-global-main">
		<a
			href={
				"https://wa.me/542657584728?text=Hola%2C%20me%20comunico%20desde%20su%20página%20web."
			}
			target="_blank"
			rel="noreferrer"
			title="Comunicate con nosotros"
		>
			<img src={whatsapp} width="80" height="auto" />
		</a>
	</div>
);

export default WhatsappGlobal;
