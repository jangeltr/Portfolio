/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {
				'128':'36rem', //para el tamaño de la imagen
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
