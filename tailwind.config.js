/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          'from': { width: '0ch' },
          'to': { width: '15ch' },  // Adjust '13ch' to match the length of your text
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        }
      },
      animation: {
        typing: 'typing 2s steps(15) infinite alternate',  // Adjust duration and steps as needed
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
