/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			'transparent': 'transparent',
			'black': '#000',
			'white': '#fff',
			'muted': {
				DEFAULT:'#f5f5f5',
				neutral: '#a1a1aa',
			},
			'primario': {
				DEFAULT: '#CC0812',
				dark: '#8C060C',
				light: '#E50914',
			},
			'stone': {
				DEFAULT: '#a8a29e'
			}
		},
		fontFamily: {
      manrope: ['Manrope'],
    },
	},
};
