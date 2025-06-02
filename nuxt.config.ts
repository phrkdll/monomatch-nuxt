// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@nuxt/icon",
		"@nuxtjs/tailwindcss",
		"@pinia/nuxt",
		"nuxt-security",
	],
	devtools: { enabled: true },
	css: ["@picocss/pico/css/pico.amber.min.css"],
	runtimeConfig: {
		public: {
			apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
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
	security: {
		headers: {
			contentSecurityPolicy: {
				"upgrade-insecure-requests": true,
			},
		},
	},
})
