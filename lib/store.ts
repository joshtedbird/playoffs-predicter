import { create } from "zustand";
import { updateRound } from "./helpers";
import { Conference, Team } from "./teams";

export type Action = "add" | "delete";

export const empty_team = { seed: 0, team: "TBD" };

interface useStoreProps {
  afc_wildcard: Team[];
  afc_div: Team[];
  change_afc_div: (t: Team[], team: Team, a: Action) => void;
  afc_conf: Team[];
  change_afc_conf: (t: Team[], team: Team, a: Action) => void;
  nfc_wildcard: Team[];
  nfc_div: Team[];
  change_nfc_div: (t: Team[], team: Team, a: Action) => void;
  nfc_conf: Team[];
  change_nfc_conf: (t: Team[], team: Team, a: Action) => void;
  sb: {
    afc: Team;
    nfc: Team;
  };
  change_sb: (conf: Conference, team: Team, a: Action) => void;

  winner: Team | null;
  change_winner: (t: Team, a: Action) => void;

  afc_div_lock: boolean;
  nfc_div_lock: boolean;
}

export const useStore = create<useStoreProps>((set, get) => ({
  afc_wildcard: [
    { seed: 2, team: "Buffalo Bills", conference: "afc" },
    { seed: 3, team: "Cincinnati Bengals", conference: "afc" },
    { seed: 4, team: "Jacksonville Jaguars", conference: "afc" },
    { seed: 5, team: "Los Angeles Chargers", conference: "afc" },
    { seed: 6, team: "Baltimore Ravens", conference: "afc" },
    { seed: 7, team: "Miami Dolphins", conference: "afc" },
  ],
  afc_div: [{ seed: 1, team: "Kansas City Chiefs", conference: "afc" }],
  change_afc_div: (t: Team[], team: Team, a: Action) => {
    if (t.length >= get().afc_div.length && t.length > 3) {
      set({ afc_div_lock: false });
    } else {
      set({ afc_div_lock: true });
    }
    set({ afc_div: t });
    get().change_afc_conf([], team, a);
  },
  afc_conf: [],
  change_afc_conf: (t: Team[], team: Team, a: Action) => {
    set({ afc_conf: t });
    get().change_sb("afc", empty_team, a);
  },
  nfc_wildcard: [
    { seed: 2, team: "San Francisco 49ers", conference: "nfc" },
    { seed: 3, team: "Minnesota Vikings", conference: "nfc" },
    { seed: 4, team: "Tampa Bay Buccaneers", conference: "nfc" },
    { seed: 5, team: "Dallas Cowboys", conference: "nfc" },
    { seed: 6, team: "New York Giants", conference: "nfc" },
    { seed: 7, team: "Seattle Seahawks", conference: "nfc" },
  ],
  nfc_div: [{ seed: 1, team: "Philadelphia Eagles", conference: "nfc" }],
  change_nfc_div: (t: Team[], team: Team, a: Action) => {
    if (t.length >= get().nfc_div.length && t.length > 3) {
      set({ nfc_div_lock: false });
    } else {
      set({ nfc_div_lock: true });
    }
    set({ nfc_div: t });
    get().change_nfc_conf([], team, a);
  },
  nfc_conf: [],
  change_nfc_conf: (t: Team[], team: Team, a: Action) => {
    set({ nfc_conf: t });
    get().change_sb("nfc", empty_team, a);
  },
  sb: {
    afc: empty_team,
    nfc: empty_team,
  },
  change_sb: (conf: Conference, team: Team, a: Action) => {
    let new_sb = get().sb;
    if (a === "add") {
      if (conf === "afc") {
        new_sb.afc = team;
      } else {
        new_sb.nfc = team;
      }
    } else {
      if (conf === "afc") {
        new_sb.afc = empty_team;
      } else {
        new_sb.nfc = empty_team;
      }
    }
    set({ sb: new_sb });
  },

  winner: null,
  change_winner: (t: Team, a: Action) => {
    set({ winner: a === "add" ? t : null });
  },

  afc_div_lock: true,
  nfc_div_lock: true,
}));
