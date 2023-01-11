import { useState } from "react";
import { styled } from "../stitches.config";

const Container = styled("div", {
  width: "100%",
  height: "7rem",

  display: "flex",
  flexDirection: "column",

  borderRadius: ".5rem",
  overflow: "hidden",

  border: "1px solid $border100",
  boxSizing: "border-box",

  backgroundColor: "$surface100",

  "& + div": {
    marginTop: "$matchup",
  },
});

const TeamBox = styled("div", {
  width: "100%",
  height: "50%",

  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "flex-start",
  fontSize: "$body",

  "& + div": {
    borderTop: "1px solid $border100",
  },

  transition: "all 0.3s",

  variants: {
    selected: {
      true: {
        backgroundColor: "$highlight",
        color: "#fff",
        fontWeight: "$bold",
      },
      false: {
        backgroundColor: "$surface100",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        },
      },
    },
    lose: {
      true: {
        color: "$font300",
      },
      false: {
        color: "$font100",
      },
    },
  },
});

const SeedBox = styled("div", {
  height: "100%",
  width: "3rem",

  backgroundColor: "rgba(0, 0, 0, 0.05)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontWeight: "$bold",
});

const TeamName = styled("span", {
  flex: "auto",
  marginLeft: "1rem",
});

type Team = "home" | "away";

export function Matchup() {
  const [selected, changeSelected] = useState<null | Team>(null);

  const handleClick = (team?: Team) => {
    if (team === selected) {
      changeSelected(null);
    } else if (team) {
      changeSelected(team);
    } else {
      changeSelected(null);
    }
  };

  return (
    <Container>
      <TeamBox
        onClick={() => handleClick("away")}
        selected={selected === "away"}
        lose={selected === "home"}
      >
        <SeedBox>1</SeedBox>
        <TeamName>Miami Dolphins</TeamName>
      </TeamBox>
      <TeamBox
        onClick={() => handleClick("home")}
        selected={selected === "home"}
        lose={selected === "away"}
      >
        <SeedBox>1</SeedBox>
        <TeamName>Buffalo Bills</TeamName>
      </TeamBox>
    </Container>
  );
}
