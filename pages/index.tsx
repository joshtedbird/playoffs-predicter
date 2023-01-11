import { Wrapper, Section, SectionHeading } from "../components/elements";
import { Matchup } from "../components/Matchup";
import { Heading } from "../components/Heading";

export default function Home() {
  return (
    <Wrapper layout={{ "@initial": "landscape", "@mobile": "portrait" }}>
      <Heading icon={"/afc-logo.svg"} area={"afc-heading"}>
        American Football Conference
      </Heading>

      <Section
        css={{ gridArea: "afc-wildcard" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SectionHeading>Wildcard Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
        <Matchup />
      </Section>
      <Section
        css={{ gridArea: "afc-div" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SectionHeading>Divisional Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
      </Section>
      <Section
        css={{ gridArea: "afc-conf" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SectionHeading>Conference Championship</SectionHeading>

        <Matchup />
      </Section>
      <Heading icon={"/nfc-logo.svg"} area={"nfc-heading"}>
        National Football Conference
      </Heading>

      <Section
        css={{ gridArea: "nfc-wildcard" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SectionHeading>Wildcard Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
        <Matchup />
      </Section>
      <Section
        css={{ gridArea: "nfc-div" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SectionHeading>Divisional Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
      </Section>
      <Section
        css={{ gridArea: "nfc-conf" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <SectionHeading>Conference Championship</SectionHeading>

        <Matchup />
      </Section>
      <Heading icon={"/sb-icon.png"} area={"sb-heading"}>
        Super Bowl LVII
      </Heading>

      <Section
        css={{ gridArea: "sb" }}
        layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      >
        <Matchup />
      </Section>
    </Wrapper>
  );
}
