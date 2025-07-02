import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom navy blue color palette
        navy: {
          50: '#f0f4ff',   // Very light navy for backgrounds
          100: '#e0eaff',  // Light navy for subtle backgrounds
          200: '#c7d8ff',  // Light navy for accents
          300: '#a4c1ff',  // Medium light navy
          400: '#7ca3ff',  // Medium navy
          500: '#5a85ff',  // Main navy (replaces blue-600)
          600: '#1e3a8a',  // Primary navy (darker than blue-600)
          700: '#1e40af',  // Dark navy for hover states
          800: '#1e3a8a',  // Darker navy
          900: '#172554',  // Very dark navy
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config 