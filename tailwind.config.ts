import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      colors: {
        streak: "var(--streak)",
        "streak-foreground": "var(--streak-foreground)",
      },
    },
  },
}

export default config