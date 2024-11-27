import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";


function addVariableForColors({ addBase, theme }: PluginAPI) {
  const allColors = theme('colors', {}) || {};

  const newVars: Record<string, string> = {};

  Object.entries(allColors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      newVars[`--${key}`] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === 'string') {
          newVars[`--${key}-${subKey}`] = subValue;
        }
      });
    }
  });

  addBase({
    ":root": newVars,
  });
}



export default {
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
      },
      keyframes: {
        marquee: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
        },
     
    },
    animation: {
        marquee: 'marquee 30s linear infinite',
    },
    },
  },
  plugins: [ addVariableForColors],
} satisfies Config;
