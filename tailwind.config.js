/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    extend: {
      colors: {
        // Light theme - Notebook colors
        background: '#f8f6f1',
        foreground: '#2d2d2d',
        muted: '#666666',
        'notebook-line': '#e8e4d9',
        // Dark theme - Flat matte colors
        'dark-background': '#1a1a1a',
        'dark-foreground': '#e0e0e0',
        'dark-muted': '#a0a0a0',
        'dark-notebook-line': '#2d2d2d',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5rem' }],
        'sm': ['0.875rem', { lineHeight: '1.75rem' }],
        'base': ['1rem', { lineHeight: '2rem' }],
        'lg': ['1.125rem', { lineHeight: '2.25rem' }],
        'xl': ['1.25rem', { lineHeight: '2.5rem' }],
        '2xl': ['1.5rem', { lineHeight: '3rem' }],
      },
      backgroundImage: {
        'notebook': "linear-gradient(#e8e4d9 1px, transparent 1px)",
        'notebook-horizontal': "linear-gradient(90deg, #e8e4d9 1px, transparent 1px)",
        'dark-notebook': "linear-gradient(#2d2d2d 1px, transparent 1px)",
        'dark-notebook-horizontal': "linear-gradient(90deg, #2d2d2d 1px, transparent 1px)",
      },
      backgroundSize: {
        'notebook': '100% 2rem',
        'notebook-horizontal': '2rem 100%',
      },
      screens: {
        'full': '100vw',
      },
    },
  },
  plugins: [],
};
