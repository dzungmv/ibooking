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
            maxWidth: {
                main: '1250px',
            },
        },
    },
    plugins: [],
} satisfies Config;
