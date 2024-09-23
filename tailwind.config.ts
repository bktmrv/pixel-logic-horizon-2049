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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        floating:
          '0px 0px 2px rgba(0, 0, 0, 0.04), 0px 2px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 6px 24px rgba(0, 0, 0, 0.04)',
      },
      fontSize: {
        xxs: '10px',
      },
    },
  },
  plugins: [],
}

export default config
