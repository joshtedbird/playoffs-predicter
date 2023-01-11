import { useState } from "react";
import { styled } from "../stitches.config";
import { Team } from "../lib/teams";

const Container = styled("div", {
  width: "100%",
  maxWidth: "26rem",

  margin: "0 auto",

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

  variants: {
    layout: {
      portrait: {
        height: "7rem",
      },
      landscape: {
        height: "6rem",
      },
    },
  },
});

const TeamBox = styled("div", {
  width: "100%",
  height: "50%",

  display: "flex",
  flexDirection: "row",

  alignItems: "center",
  justifyContent: "flex-start",
  userSelect: "none",

  "& + div": {
    borderTop: "1px solid $border100",
  },

  transition: "background-color 0.2s, color 0.2s",

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
    layout: {
      portrait: {
        fontSize: "$body",
      },
      landscape: {
        fontSize: "$small",
      },
    },
  },
});

const SeedBox = styled("div", {
  height: "100%",
  width: "18%",
  maxWidth: "3rem",

  backgroundColor: "rgba(0, 0, 0, 0.05)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontWeight: "$bold",
  marginRight: "0.6rem",
});

type TeamLoc = "home" | "away";

interface MatchupProps {
  matchup: [Team, Team];
}

export function Matchup({ matchup }: MatchupProps) {
  const [selected, changeSelected] = useState<null | TeamLoc>(null);

  const handleClick = (team?: TeamLoc) => {
    if (team === selected) {
      changeSelected(null);
    } else if (team) {
      changeSelected(team);
    } else {
      changeSelected(null);
    }
  };

  return (
    <Container layout={{ "@initial": "landscape", "@mobile": "portrait" }}>
      <TeamBox
        onClick={() => handleClick("away")}
        selected={selected === "away"}
        lose={selected === "home"}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SeedBox>{matchup[0].seed === 0 ? "-" : matchup[0].seed}</SeedBox>
        <span>{matchup[0].team}</span>
      </TeamBox>
      <TeamBox
        onClick={() => handleClick("home")}
        selected={selected === "home"}
        lose={selected === "away"}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SeedBox>{matchup[1].seed === 0 ? "-" : matchup[1].seed}</SeedBox>
        <span>{matchup[1].team}</span>
      </TeamBox>
    </Container>
  );
}
