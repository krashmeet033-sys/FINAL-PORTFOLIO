/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617", // Dark Blue (Slate-950)
        foreground: "#f8fafc",
        primary: {
          DEFAULT: "#38bdf8", // Sky Blue
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#818cf8", // Indigo
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#c084fc", // Purple
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "rgba(30, 41, 59, 0.5)", // Slate-800 with opacity
          foreground: "#f8fafc",
          border: "rgba(255, 255, 255, 0.05)",
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
