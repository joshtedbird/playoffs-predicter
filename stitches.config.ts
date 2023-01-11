import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      font100: "#000",
      font200: "#7e7e7e",
      font300: "#bbb",

      border100: "#e3e3e3",

      highlight: "#92D074",

      background: "#fafafa",

      surface100: "#fff",
    },
    space: {
      matchup: "1.5rem",
    },
    fontSizes: {
      body: "1.2rem",
      heading: "1.3rem",
    },
    fontWeights: {
      main: "400",
      bold: "700",
    },
  },
  media: {
    mobile: "(max-width: 800px)",
  },
});
