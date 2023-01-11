import { styled } from "../stitches.config";

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "100rem",
  margin: "0 auto",

  variants: {
    layout: {
      portrait: {
        display: "flex",
        flexDirection: "column",
      },
      landscape: {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "4em auto 4em auto",
        gridTemplateAreas: `"afc-heading afc-heading afc-heading nfc-heading nfc-heading nfc-heading" "afc-wildcard afc-div afc-conf nfc-conf nfc-div nfc-wildcard" "sb-heading sb-heading sb-heading sb-heading sb-heading sb-heading" "sb sb sb sb sb sb"`,
      },
    },
  },
});

export const Section = styled("div", {
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "column",
  width: "100%",

  variants: {
    layout: {
      portrait: {
        width: "auto",
        padding: "$matchup",

        "& + div": {
          borderTop: "1px solid $border100",
        },
      },
      landscape: {
        padding: "$round",
        justifyContent: "center",
      },
    },
  },
});

export const SectionHeading = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",

  marginBottom: "$matchup",

  color: "$font200",
  fontSize: "$small",
  fontWeight: "$bold",

  "@mobile": {
    fontSize: "$body",
  },
});
