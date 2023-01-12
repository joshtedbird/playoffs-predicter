import { Team, IMatchup } from "./teams";

import { Action, empty_team } from "./store";

export const createMatchups = (teams: Team[], matches: number) => {
  let teams_sort = [...teams];

  teams_sort.sort((a, b) => b.seed - a.seed);

  const matchups: IMatchup[] = [];

  for (let i = 0; i < matches; i++) {
    let away = empty_team;
    let home = empty_team;
    if (i + 1 <= teams_sort.length / 2) {
      away = teams_sort[i];
      home = teams_sort[teams_sort.length - 1 - i];
    } else if (i === teams_sort.length - 1 - i) {
      away = empty_team;
      home = teams_sort[i];
    }

    matchups.push([away, home]);
  }

  return matchups;
};

export const updateRound = (
  teams: Team[],
  team: Team,
  action: Action,
  opponent: Team | null
) => {
  let new_teams = [...teams];

  if (action === "add" && !new_teams.includes(team)) {
    new_teams.push(team);
  } else if (action === "delete" && new_teams.indexOf(team) > -1) {
    const i = new_teams.indexOf(team);
    new_teams.splice(i, 1);
  }

  if (action === "add" && opponent) {
    if (new_teams.indexOf(opponent) > -1) {
      const i = new_teams.indexOf(opponent);
      new_teams.splice(i, 1);
    }
  }

  return new_teams;
};
