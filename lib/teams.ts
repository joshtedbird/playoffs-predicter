export type Conference = "afc" | "nfc";
export type Round = "wild" | "div" | "conf" | "sb";

export type Team = {
  seed: number;
  team: string;
  conference?: Conference;
};

export type IMatchup = [Team, Team];

export const afc_teams: Team[] = [
  { seed: 1, team: "Kansas City Chiefs", conference: "afc" },
  { seed: 2, team: "Buffalo Bills", conference: "afc" },
  { seed: 3, team: "Cincinnati Bengals", conference: "afc" },
  { seed: 4, team: "Jacksonville Jaguars", conference: "afc" },
  { seed: 5, team: "Los Angeles Chargers", conference: "afc" },
  { seed: 6, team: "Baltimore Ravens", conference: "afc" },
  { seed: 7, team: "Miami Dolphins", conference: "afc" },
];

export const nfc_teams: Team[] = [
  { seed: 1, team: "Philadelphia Eagles", conference: "nfc" },
  { seed: 2, team: "San Francisco 49ers", conference: "nfc" },
  { seed: 3, team: "Minnesota Vikings", conference: "nfc" },
  { seed: 4, team: "Tampa Bay Buccaneers", conference: "nfc" },
  { seed: 5, team: "Dallas Cowboys", conference: "nfc" },
  { seed: 6, team: "New York Giants", conference: "nfc" },
  { seed: 7, team: "Seattle Seahawks", conference: "nfc" },
];
