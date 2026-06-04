/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx, Ba,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stark-black': '#080808',
        'warm-white': '#f5f4f0',
        'signal-red': '#d91c1c',
        'dark-card': '#121212',
        'gray-muted': '#8a8a88',
        // Mapping existing color names to new palette for smooth transition
        'primary-dark': '#080808',
        'sage-green': '#8a8a88',
        'warm-bronze': '#d91c1c',
        'gold': '#d91c1c',
        'cream': '#121212',
        'off-white': '#f5f4f0',
        'muted-sage': '#8a8a88',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        label: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
