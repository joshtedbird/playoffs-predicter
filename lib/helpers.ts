import { Team, IMatchup } from "./teams";

export const createMatchups = (teams: Team[], matches: number) => {
  let teams_sort = [...teams];

  teams_sort.sort((a, b) => b.seed - a.seed);

  const matchups: IMatchup[] = [];

  for (let i = 0; i < matches; i++) {
    let away = { seed: 0, team: "TBD" };
    let home = { seed: 0, team: "TBD" };
    if (i + 1 <= teams_sort.length / 2) {
      away = teams_sort[i];
      home = teams_sort[teams_sort.length - 1 - i];
    } else if (i === teams_sort.length - 1 - i) {
      away = { seed: 0, team: "TBD" };
      home = teams_sort[i];
    }

    matchups.push([away, home]);
  }

  return matchups;
};

createMatchups([{ seed: 1, team: "Kansas City Chiefs", conference: "afc" }], 2);
