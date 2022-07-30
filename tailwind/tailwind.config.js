/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{vue,js}"],
    theme: {
        extend: {},
        colors: {
            neutral: {
                default: "#bdbdbd",
                1: "#4f4f4f",
                2: "#828282",
                3: "#e0e0e0",
            },
            state: {
                info: "#2f80ed",
                success: "#27ae60",
                warning: "#e2b93b",
                error: "#eb5757",
            },
            primary: {
                light: "#f4694c",
                dark: "#092c4c",
            },
            white: "#fff",
            black: "#000",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
};