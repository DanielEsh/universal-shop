/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Graphik'],
            secondary: ['SF Pro Display'],
        },
        colors: {
            primary: {
                '100': '#fef3c7',
                '200': '#fde68a',
                '300': '#fcd34d',
                '400': '#ffd139',
                '500': '#fcd846',
            },
            dark: {
                '100': '#525252',
                '200': '#404040',
                '300': '#242424',
                '400': '#181d1c',
                '500': '#0d1212',
            },
            light: {
                '100': '#a1a1aa',
                '200': '#d4d4d8',
                '300': '#e4e4e7',
                '400': '#f4f4f5',
                '500': '#fafafa',
            },
            gray: {
                '100': '#e5e7eb',
                '200': '#d1d5db',
                '300': '#9ca3af',
                '400': '#6b7280',
                '500': '#29304a',
            },
            success: {
                '400': '#4ade80',
                '500': '#22c55e',
            },
            error: {
                '400': '#ef4444',
                '500': '#dc2626',
            },
            blue: {
                '500': '#2992fa',
                '400': '#40a9ff',
            },
            white: '#fff',
            black: '#000',
            transparent: 'transparent',
            currentColor: 'currentColor',
        },
        extend: {
            zIndex: {
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
            },
            spacing: {
                '16': '16px',
            },
        },
    },
    plugins: [
        plugin(({ addVariant }) => {
            addVariant('third', '&:nth-child(3n)')
        }),
    ],
}
