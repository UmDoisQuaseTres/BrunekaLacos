import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bruneka-pink': '#F472B6', // Cor personalizada Bruneka Pink
        'bruneka-light-pink': '#FCE4EC',
        'bruneka-pink-dark': '#D946AB', // Cor personalizada Bruneka Light Pink
      },
      fontFamily: {
        'sans': ['"Nunito Sans"', 'sans-serif'], // Fonte sans-serif personalizada
        'serif': ['"Merriweather"', 'serif'], // Fonte serifada personalizada
      },
      container: {
        center: true, // Centralizar o container por padrão
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;