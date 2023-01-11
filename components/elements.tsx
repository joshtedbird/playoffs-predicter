import { styled } from "../stitches.config";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "$background",
});

export const Wrapper = styled("div", {
  width: "100%",

  margin: "0 auto",
});

export const Section = styled("div", {
  boxSizing: "border-box",
  padding: "$matchup",

  display: "flex",
  flexDirection: "column",
  width: "22rem",

  "@mobile": {
    width: "auto",
  },

  "& + div": {
    borderTop: "1px solid $border100",
  },
});

export const SectionHeading = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",

  marginBottom: "$matchup",

  color: "$font200",
  fontSize: "$body",
  fontWeight: "$bold",
});
