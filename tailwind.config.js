/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Syne', 'sans-serif'],
                body: ['"Plus Jakarta Sans"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                primary: {
                    DEFAULT: '#00D1FF', // Cyan
                    dark: '#00A3C7',
                },
                background: {
                    DEFAULT: '#030303',
                    card: '#0A0A0A',
                },
                accent: {
                    DEFAULT: '#7000FF', // Purple
                    secondary: '#FF00E5', // Pink
                }
            },
            backgroundImage: {
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'noise': "url('/assets/noise.png')",
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
