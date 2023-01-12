import { Container, Wrapper, Section, Body } from "../components/elements";
import { Matchup } from "../components/Matchup";
import { Heading, Heading1 } from "../components/Heading";
import { Footer } from "../components/Footer";
import { createMatchups, updateRound } from "../lib/helpers";
import { Round } from "../components/Round";
import { useStore } from "../lib/store";
import supabase from "../lib/supabaseClient";

export default function Home() {
  const afc_wildcard = useStore((s) => s.afc_wildcard);
  const [afc_div, change_afc_div] = useStore((s) => [
    s.afc_div,
    s.change_afc_div,
  ]);
  const [afc_conf, change_afc_conf] = useStore((s) => [
    s.afc_conf,
    s.change_afc_conf,
  ]);
  const nfc_wildcard = useStore((s) => s.nfc_wildcard);
  const [nfc_div, change_nfc_div] = useStore((s) => [
    s.nfc_div,
    s.change_nfc_div,
  ]);
  const [nfc_conf, change_nfc_conf] = useStore((s) => [
    s.nfc_conf,
    s.change_nfc_conf,
  ]);
  const [sb, change_sb] = useStore((s) => [s.sb, s.change_sb]);

  const [winner, change_winner] = useStore((s) => [s.winner, s.change_winner]);

  const afc_div_lock = useStore((s) => s.afc_div_lock);
  const nfc_div_lock = useStore((s) => s.nfc_div_lock);

  // console.log(supabase);

  return (
    <Container>
      <Heading1>2023 NFL Playoffs Predicter</Heading1>
      <Body>
        Select your picks for each round of the 2023 NFL Playoffs with your
        final choice crowning the winner of Super Bowl LVII. Each team is shown
        with their seed (their ranking entering the Playoffs) and their team
        name. The highest seeded team in each game (except for the Super Bowl)
        plays at home. Good luck!
      </Body>
      <Wrapper layout={{ "@initial": "landscape", "@mobile": "portrait" }}>
        <Heading icon={"/afc-logo.svg"} area={"afc-heading"}>
          American Football Conference
        </Heading>
        <Round
          area="afc-wildcard"
          heading={"Wildcard Playoffs"}
          matchups={createMatchups(afc_wildcard, 3)}
          change={(team, action, opponent) =>
            change_afc_div(
              updateRound(afc_div, team, action, opponent),
              team,
              action
            )
          }
          locked={false}
        />
        <Round
          area="afc-div"
          heading={"Divisional Playoffs"}
          matchups={createMatchups(afc_div, 2)}
          change={(team, action, opponent) =>
            change_afc_conf(
              updateRound(afc_conf, team, action, opponent),
              team,
              action
            )
          }
          locked={afc_div_lock}
        />
        <Round
          area="afc-conf"
          heading={"Conference Championship"}
          matchups={createMatchups(afc_conf, 1)}
          change={(team, action, opponent) => change_sb("afc", team, action)}
          locked={false}
        />
        <Heading icon={"/nfc-logo.svg"} area={"nfc-heading"}>
          National Football Conference
        </Heading>
        <Round
          area="nfc-wildcard"
          heading={"Wildcard Playoffs"}
          matchups={createMatchups(nfc_wildcard, 3)}
          change={(team, action, opponent) =>
            change_nfc_div(
              updateRound(nfc_div, team, action, opponent),
              team,
              action
            )
          }
          locked={false}
        />
        <Round
          area="nfc-div"
          heading={"Divisional Playoffs"}
          matchups={createMatchups(nfc_div, 2)}
          change={(team, action, opponent) =>
            change_nfc_conf(
              updateRound(nfc_conf, team, action, opponent),
              team,
              action
            )
          }
          locked={nfc_div_lock}
        />
        <Round
          area="nfc-conf"
          heading={"Conference Championship"}
          change={(team, action, opponent) => change_sb("nfc", team, action)}
          matchups={createMatchups(nfc_conf, 1)}
          locked={false}
        />
        <Heading icon={"/sb-icon.png"} area={"sb-heading"}>
          Super Bowl LVII
        </Heading>
        <Section
          css={{ gridArea: "sb" }}
          layout={{ "@initial": "landscape", "@mobile": "portrait" }}
        >
          <Matchup
            matchup={[sb.afc, sb.nfc]}
            change={(team, action) => change_winner(team, action)}
            locked={false}
          />
        </Section>
      </Wrapper>
      <Footer />
    </Container>
  );
}
