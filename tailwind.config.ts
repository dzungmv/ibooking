import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
            },
            backgroundImage: {
                apple: 'linear-gradient(90deg, #0894FF, #C959DD 10%, #FF2E54 68%, #FF9004)',
            },
            maxWidth: {
                main: '1350px',
            },
            animation: {
                width: 'width 0.7s ease-in-out 1.5s backwards',
            },
            keyframes: {
                width: {
                    '0%': {
                        width: '0px',
                        opacity: '0',
                    },
                    '25%': {
                        opacity: '0.25',
                    },
                    '50%': {
                        opacity: '0.5',
                    },
                    '70%': {
                        opacity: '0.70',
                    },
                    '100%': {
                        width: '100%',
                        opacity: '1',
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
