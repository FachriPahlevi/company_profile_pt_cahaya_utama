import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import { colors } from "./resources/js/Styles/themes";
import { fontSize } from "./resources/js/Styles/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    darkMode: "class", // aktifkan dark mode via class
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter Tight"', ...defaultTheme.fontFamily.sans],
            },
            colors,
            fontSize,
        },
    },
    plugins: [forms],
};

// import defaultTheme from 'tailwindcss/defaultTheme';
// import forms from '@tailwindcss/forms';

// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
//         './storage/framework/views/*.php',
//         './resources/views/**/*.blade.php',
//         './resources/js/**/*.jsx',
//     ],

//     theme: {
//         extend: {
//             fontFamily: {
//                 sans: ['Figtree', ...defaultTheme.fontFamily.sans],
//             },
//         },
//     },

//     plugins: [forms],
// };
