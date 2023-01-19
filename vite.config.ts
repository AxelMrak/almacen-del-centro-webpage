import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// TODO: Add sitemap generator

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "auto",
			manifest: {
				name: "Almacén del centro",
				short_name: "AC",
				start_url: "/",
				icons: [
					{
						src: "/logo-app.png",
						type: "image/ico",
						sizes: "50x50",
					},
					{
						src: "/logo-app.png",
						type: "image/png",
						sizes: "150x150",
					},
				],
				display: "fullscreen",
				description:
					"Almacén del centro es un lugar donde podrás conocer un poco de la historia y tradiciones de San Luis.",
			},
		}),
	],
	server: {
		host: true,
	},
});
