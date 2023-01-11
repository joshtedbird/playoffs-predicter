import { create } from "zustand";
import { Team } from "./teams";

interface useStoreProps {
  afc_wildcard: Team[];
  afc_div: Team[];
  afc_conf: Team[];
  nfc_wildcard: Team[];
  nfc_div: Team[];
  nfc_conf: Team[];
}

export const useStore = create<useStoreProps>((set) => ({
  afc_wildcard: [
    { seed: 2, team: "Buffalo Bills", conference: "afc" },
    { seed: 3, team: "Cincinnati Bengals", conference: "afc" },
    { seed: 4, team: "Jacksonville Jaguars", conference: "afc" },
    { seed: 5, team: "Los Angeles Chargers", conference: "afc" },
    { seed: 6, team: "Baltimore Ravens", conference: "afc" },
    { seed: 7, team: "Miami Dolphins", conference: "afc" },
  ],
  afc_div: [{ seed: 1, team: "Kansas City Chiefs", conference: "afc" }],
  afc_conf: [],
  nfc_wildcard: [
    { seed: 2, team: "San Francisco 49ers", conference: "nfc" },
    { seed: 3, team: "Minnesota Vikings", conference: "nfc" },
    { seed: 4, team: "Tampa Bay Buccaneers", conference: "nfc" },
    { seed: 5, team: "Dallas Cowboys", conference: "nfc" },
    { seed: 6, team: "New York Giants", conference: "nfc" },
    { seed: 7, team: "Seattle Seahawks", conference: "nfc" },
  ],
  nfc_div: [{ seed: 1, team: "Philadelphia Eagles", conference: "nfc" }],
  nfc_conf: [],
  sb: [],
}));
