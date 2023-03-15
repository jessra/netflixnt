/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			'transparent': 'transparent',
			'black': '#000',
			'white': '#fff',
			'muted': {
				DEFAULT:'#a8a29e',
				neutral: '#a1a1aa',
			},
			'primario': {
				DEFAULT: '#CC0812',
				dark: '#8C060C',
				light: '#E50914',
			},
			'stone': {
				DEFAULT: '#a8a29e',
				light: '#e7e5e4',
				dark: '#292524'
			}
		},
		fontFamily: {
      manrope: ['Manrope'],
    },
	},
};
