/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ['"Montserrat"', "sans-serif"],
        },
        extend: {
            fontSize: {
                "10xl": "9.5rem",
                "20xl": "12.5rem",
            },
            colors: {
                "main-background-color": "#2f4734",
            },
        },
    },
    plugins: [],
};
