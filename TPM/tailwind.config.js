/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	  "./node_modules/@shadcn/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  poppins: ['Poppins', 'sans-serif'],
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  sidebar: {
			DEFAULT: 'hsl(var(--sidebar-background))',
			foreground: 'hsl(var(--sidebar-foreground))',
			primary: 'hsl(var(--sidebar-primary))',
			'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
			accent: 'hsl(var(--sidebar-accent))',
			'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
			border: 'hsl(var(--sidebar-border))',
			ring: 'hsl(var(--sidebar-ring))'
		  }
		},
		animation: {
		  marquee: "marquee var(--duration) linear infinite",
		  "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		  'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
		  'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear'
		},
		keyframes: {
		  marquee: {
			from: { transform: "translateX(0)" },
			to: { transform: "translateX(calc(-100% - var(--gap)))" },
		  },
		  "marquee-vertical": {
			from: { transform: "translateY(0)" },
			to: { transform: "translateY(calc(-100% - var(--gap)))" },
		  },
		  'shimmer-slide': {
			to: {
			  transform: 'translate(calc(100cqw - 100%), 0)'
			}
		  },
		  'spin-around': {
			'0%': {
			  transform: 'translateZ(0) rotate(0)'
			},
			'15%, 35%': {
			  transform: 'translateZ(0) rotate(90deg)'
			},
			'65%, 85%': {
			  transform: 'translateZ(0) rotate(270deg)'
			},
			'100%': {
			  transform: 'translateZ(0) rotate(360deg)'
			}
		  }
		}
	  }
	},
	plugins: [require("tailwindcss-animate")]
  }