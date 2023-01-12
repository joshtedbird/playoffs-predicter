import { useEffect, useState } from "react";
import { styled } from "../stitches.config";
import { IMatchup, Team } from "../lib/teams";
import { Action } from "../lib/store";

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
    active: {
      true: {
        pointerEvents: "all",
      },
      false: {
        pointerEvents: "none",
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
  matchup: IMatchup;
  change: (team: Team, action: Action, opponent: Team | null) => void;
  locked: boolean;
}

export function Matchup({ matchup, change, locked }: MatchupProps) {
  const [selected, changeSelected] = useState<null | TeamLoc>(null);
  const [active, changeActive] = useState(false);
  const [prevSeeds, changePrevSeeds] = useState<[number, number]>([0, 0]);

  const handleClick = (team: Team, loc?: TeamLoc) => {
    if (loc === selected) {
      //removes team
      changeSelected(null);
      change(team, "delete", null);
    } else if (loc) {
      changeSelected(loc);
      const opponent = team.seed === matchup[0].seed ? matchup[1] : matchup[0];
      console.log(opponent);
      change(team, "add", opponent);
    } else {
      changeSelected(null);
    }
  };

  useEffect(() => {
    if (matchup[0].seed === 0 || matchup[1].seed === 0) {
      changeActive(false);
      changeSelected(null);
    } else if (!locked) {
      changeActive(true);
    }

    if (matchup[0].seed !== prevSeeds[0] || matchup[1].seed !== prevSeeds[1]) {
      changeSelected(null);
    }

    changePrevSeeds([matchup[0].seed, matchup[1].seed]);
  }, [matchup]);

  useEffect(() => {
    if (locked) {
      changeSelected(null);
      changeActive(false);
    }
  }, [locked]);

  return (
    <Container
      layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      active={active}
    >
      <TeamBox
        onClick={() => handleClick(matchup[0], "away")}
        selected={selected === "away"}
        lose={selected === "home" || locked}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SeedBox>{matchup[0].seed === 0 ? "-" : matchup[0].seed}</SeedBox>
        <span>{matchup[0].team}</span>
      </TeamBox>
      <TeamBox
        onClick={() => handleClick(matchup[1], "home")}
        selected={selected === "home"}
        lose={selected === "away" || locked}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SeedBox>{matchup[1].seed === 0 ? "-" : matchup[1].seed}</SeedBox>
        <span>{matchup[1].team}</span>
      </TeamBox>
    </Container>
  );
}
