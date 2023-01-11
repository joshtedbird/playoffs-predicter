import { Wrapper, Section, SectionHeading } from "../components/elements";
import { Matchup } from "../components/Matchup";
import { Heading } from "../components/Heading";
// import AfcLogo from '/afc-logo.svg'

export default function Home() {
  return (
    <Wrapper>
      <Heading icon={"/afc-logo.svg"}>American Football Conference</Heading>

      <Section>
        <SectionHeading>Wildcard Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
        <Matchup />
      </Section>
      <Section>
        <SectionHeading>Divisional Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
      </Section>
      <Section>
        <SectionHeading>Conference Championship</SectionHeading>

        <Matchup />
        <Matchup />
      </Section>
      <Heading icon={"/nfc-logo.svg"}>National Football Conference</Heading>

      <Section>
        <SectionHeading>Wildcard Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
        <Matchup />
      </Section>
      <Section>
        <SectionHeading>Divisional Playoffs</SectionHeading>

        <Matchup />
        <Matchup />
      </Section>
      <Section>
        <SectionHeading>Conference Championship</SectionHeading>

        <Matchup />
        <Matchup />
      </Section>
    </Wrapper>
  );
}
