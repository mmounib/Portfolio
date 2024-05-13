/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                'layout': '400px 100px 400px',
            },
            colors: {
                'primary': '#C1CFDA',
                'secondary': '#02394A',
                'accent': '#165264',
            },
            screens: {
                'custom': '1015px',
                'custom-layout': '850px',
            },
            backgroundImage: {
                'bento-gradient': 'linear-gradient(135deg, #02394A 0%, rgba(0,0,0,1) 44%)',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'image': "url('/ping-pong.jpg')",
            },
        },
    },
    plugins: [
        "postcss-import",
        "postcss-nested",
        "tailwindcss",
        "autoprefixer",
        "tailwindcss/nesting",
    ],
}
