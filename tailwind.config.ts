import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {  
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
