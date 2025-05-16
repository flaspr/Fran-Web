/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

/*
 * https://unlighthouse.dev/api/config
 */
export default defineConfig({
	site: "https://majestico.co",
	scanner: {
		exclude: [/^\/cdn-cgi\//],
	},
	ci: {
		budget: 85,
		buildStatic: false, // Solo audita la URL, sin compilar localmente
	},
	debug: false,
	cache: true,
});
