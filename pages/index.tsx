import { Wrapper, Section } from "../components/elements";
import { Matchup } from "../components/Matchup";
import { Heading } from "../components/Heading";
import { afc_teams, nfc_teams, Team } from "../lib/teams";
import { createMatchups } from "../lib/helpers";
import { Round } from "../components/Round";
import { useStore } from "../lib/store";

export default function Home() {
  const afc_wildcard: Team[] = useStore((s) => s.afc_wildcard);
  const afc_div: Team[] = useStore((s) => s.afc_div);
  const afc_conf: Team[] = useStore((s) => s.afc_conf);

  return (
    <Wrapper layout={{ "@initial": "landscape", "@mobile": "portrait" }}>
      <Heading icon={"/afc-logo.svg"} area={"afc-heading"}>
        American Football Conference
      </Heading>
      <Round
        area="afc-wildcard"
        heading={"Wildcard Playoffs"}
        matchups={createMatchups(afc_wildcard, 3)}
      />
      <Round
        area="afc-div"
        heading={"Divisional Playoffs"}
        matchups={createMatchups(afc_div, 2)}
      />
      <Round
        area="afc-conf"
        heading={"Conference Championship"}
        matchups={createMatchups(afc_conf, 1)}
      />
      <Heading icon={"/nfc-logo.svg"} area={"nfc-heading"}>
        National Football Conference
      </Heading>
      <Round
        area="nfc-wildcard"
        heading={"Wildcard Playoffs"}
        matchups={createMatchups(nfc_teams, 3)}
      />
      <Round
        area="nfc-div"
        heading={"Divisional Playoffs"}
        matchups={createMatchups(nfc_teams, 2)}
      />
      <Round
        area="nfc-conf"
        heading={"Conference Championship"}
        matchups={createMatchups(nfc_teams, 1)}
      />
      <Heading icon={"/sb-icon.png"} area={"sb-heading"}>
        Super Bowl LVII
      </Heading>
      <Section
        css={{ gridArea: "sb" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <Matchup matchup={[afc_teams[3], nfc_teams[3]]} />
      </Section>
    </Wrapper>
  );
}
