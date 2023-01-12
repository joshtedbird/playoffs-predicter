import { Action } from "../lib/store";
import { IMatchup, Team } from "../lib/teams";
import { Section, SectionHeading } from "./elements";
import { Matchup } from "./Matchup";

interface RoundProps {
  area: string;
  heading: string;
  matchups: IMatchup[];
  change: (team: Team, action: Action, opponent: Team | null) => void;
  locked: boolean;
}

export function Round({ area, heading, matchups, change, locked }: RoundProps) {
  return (
    <Section
      css={{ gridArea: area }}
      layout={{ "@initial": "landscape", "@mobile": "portrait" }}
    >
      <SectionHeading>{heading}</SectionHeading>

      {matchups.map((m, i) => (
        <Matchup
          matchup={m}
          key={i}
          change={(team: Team, action: Action, opponent: Team | null) =>
            change(team, action, opponent)
          }
          locked={locked}
        />
      ))}
    </Section>
  );
}
