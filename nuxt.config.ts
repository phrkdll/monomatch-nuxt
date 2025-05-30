// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
	devtools: { enabled: true },
	css: ["@picocss/pico/css/pico.amber.min.css"],
	runtimeConfig: {
		public: {
			API_BASE_URL: process.env.API_BASE_URL,
		},
	},
	compatibilityDate: "2025-05-15",
	eslint: {
		config: {
			stylistic: {
				semi: false,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
})
