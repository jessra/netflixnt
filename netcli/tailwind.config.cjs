/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			transparent: 'transparent',
			black: {
				DEFAULT: '#000',
				soft: '#161616',
				medium: '#181818',
				obscure: '#080808',
			},
			white: {
				DEFAULT: '#fff',
				bone: '#e7e5e4'
			},
			muted: {
				DEFAULT: '#a8a29e',
				neutral: '#a1a1aa',
			},
			primario: {
				DEFAULT: '#CC0812',
				dark: '#8C060C',
				light: '#E50914',
			},
			stone: {
				DEFAULT: '#a8a29e',
				dark: '#292524',
			},
			danger: '#dc2626',
			success: '#16a34a'
		},
		fontFamily: {
			manrope: ['Manrope'],
		},
	},
	darkMode: 'class',
};
