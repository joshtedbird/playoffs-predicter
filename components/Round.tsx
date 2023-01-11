import { IMatchup } from "../lib/teams";
import { Section, SectionHeading } from "./elements";
import { Matchup } from "./Matchup";

interface RoundProps {
  area: string;
  heading: string;
  matchups: IMatchup[];
}

export function Round({ area, heading, matchups }: RoundProps) {
  return (
    <Section
      css={{ gridArea: area }}
      layout={{ "@initial": "landscape", "@mobile": "portrait" }}
    >
      <SectionHeading>{heading}</SectionHeading>

      {matchups.map((m) => (
        <Matchup matchup={m} />
      ))}
    </Section>
  );
}
