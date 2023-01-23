import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { VitePluginSitemap } from "@tormak/vite-plugin-sitemap";
import react from "@vitejs/plugin-react";

const routes = [
	{ path: "/", name: "Inicio" },
	{ path: "/historia", name: "Historia" },
	{ path: "/productos", name: "Productos" },
	{ path: "/contacto", name: "Contacto" },
];

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
		// TODO: Change baseURL when we'll have the domain
		VitePluginSitemap({
			baseUrl: "https://almacendelcentro.com",
			contentBase: "public",
			routes: routes,
			urlGenHook: (config) => {
				const updatedRoutes = config.routes;

				/** put any logic here that you want to run before the sitemap.xml file is generated
				 * ex: generate URLs for all of your blog posts
				 */

				return updatedRoutes;
			},
		}),
	],
	server: {
		host: true,
	},
});
