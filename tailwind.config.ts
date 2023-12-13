import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme.js";
import animatePlugin from "tailwindcss-animate";
import colors from "tailwindcss/colors.js";
export default {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      gridTemplateColumns: {
        "editorial-full":
          "[full-start] minmax(2rem,1fr) [standard-start] 3.75rem [narrow-start] minmax(1rem,67.5rem) [narrow-end] 3.75rem [standard-end] minmax(2rem,1fr) [full-end];",
        "editorial-mobile":
          "[full-start] minmax(2rem,1fr) [standard-start] 0 [narrow-start] minmax(1rem,67.5rem) [narrow-end] 0 [standard-end] minmax(2rem,1fr) [full-end]",
      },
      colors: {
        border: "hsl(var(--border))",
        "oyster-pink": {
          "50": "hsl(0, 43%, 97%)",
          "100": "hsl(0, 53%, 94%)",
          "200": "hsl(0, 54%, 89%)",
          "300": "hsl(0, 53%, 82%)",
          "400": "hsl(0, 50%, 71%)",
          "500": "hsl(0, 47%, 60%)",
          "600": "hsl(0, 40%, 51%)",
          "700": "hsl(0, 41%, 42%)",
          "800": "hsl(0, 39%, 35%)",
          "900": "hsl(0, 35%, 31%)",
          "950": "hsl(0, 42%, 15%)",
        },
        "moon-raker": {
          "50": "hsl(240, 50%, 98%)",
          "100": "hsl(240, 48%, 95%)",
          "200": "hsl(242, 54%, 89%)",
          "300": "hsl(243, 53%, 85%)",
          "400": "hsl(247, 52%, 76%)",
          "500": "hsl(250, 50%, 66%)",
          "600": "hsl(254, 47%, 58%)",
          "700": "hsl(255, 39%, 50%)",
          "800": "hsl(254, 39%, 42%)",
          "900": "hsl(255, 38%, 35%)",
          "950": "hsl(251, 40%, 23%)",
        },

        gray: colors.stone,
        input: {
          DEFAULT: "hsl(var(--input))",
          invalid: "hsl(var(--input-invalid))",
        },
        ring: {
          DEFAULT: "hsl(var(--ring))",
          invalid: "hsl(var(--foreground-destructive))",
        },
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          destructive: "hsl(var(--foreground-destructive))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        headings: ["var(--font-headings)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // 1rem = 16px
        /** 80px size / 84px high / bold */
        mega: ["5rem", { lineHeight: "5.25rem", fontWeight: "700" }],
        /** 56px size / 62px high / bold */
        h1: ["3.5rem", { lineHeight: "3.875rem", fontWeight: "700" }],
        /** 40px size / 48px high / bold */
        h2: ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        /** 32px size / 36px high / bold */
        h3: ["2rem", { lineHeight: "2.25rem", fontWeight: "700" }],
        /** 28px size / 36px high / bold */
        h4: ["1.75rem", { lineHeight: "2.25rem", fontWeight: "700" }],
        /** 24px size / 32px high / bold */
        h5: ["1.5rem", { lineHeight: "2rem", fontWeight: "700" }],
        /** 16px size / 20px high / bold */
        h6: ["1rem", { lineHeight: "1.25rem", fontWeight: "700" }],

        /** 32px size / 36px high / normal */
        "body-2xl": ["2rem", { lineHeight: "2.25rem" }],
        /** 28px size / 36px high / normal */
        "body-xl": ["1.75rem", { lineHeight: "2.25rem" }],
        /** 24px size / 32px high / normal */
        "body-lg": ["1.5rem", { lineHeight: "2rem" }],
        /** 20px size / 28px high / normal */
        "body-md": ["1.25rem", { lineHeight: "1.75rem" }],
        /** 16px size / 20px high / normal */
        "body-sm": ["1rem", { lineHeight: "1.25rem" }],
        /** 14px size / 18px high / normal */
        "body-xs": ["0.875rem", { lineHeight: "1.125rem" }],
        /** 12px size / 16px high / normal */
        "body-2xs": ["0.75rem", { lineHeight: "1rem" }],

        /** 18px size / 24px high / semibold */
        caption: ["1.125rem", { lineHeight: "1.5rem", fontWeight: "600" }],
        /** 12px size / 16px high / bold */
        button: ["0.75rem", { lineHeight: "1rem", fontWeight: "700" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
