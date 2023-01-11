import { styled } from "../stitches.config";

const Container = styled("div", {
  width: "100%",
  padding: "1rem 0",
  borderTop: "1px solid $border100",
  borderBottom: "1px solid $border100",
  backgroundColor: "$surface100",

  fontSize: "$heading",
  fontWeight: "$bold",

  display: "flex",
  alignItems: "center",
});

const Icon = styled("img", {
  margin: "0rem 1rem",
  height: "2rem",
});

interface HeadingProps {
  children: React.ReactNode;
  icon: string;
}

export function Heading({ children, icon }: HeadingProps) {
  return (
    <Container>
      <Icon src={icon} />
      {children}
    </Container>
  );
}
