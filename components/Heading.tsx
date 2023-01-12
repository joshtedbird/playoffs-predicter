import { styled } from "../stitches.config";

export const Heading1 = styled("div", {
  width: "100%",
  padding: "1rem 0",

  fontSize: "$heading",
  fontWeight: "$bold",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    layout: {
      portrait: {
        backgroundColor: "$surface100",
        borderTop: "1px solid $border100",
        borderBottom: "1px solid $border100",
      },
      landscape: {
        backgroundColor: "none",
        borderTop: "none",
        borderBottom: "none",
      },
    },
  },
});

const Icon = styled("img", {
  marginRight: "1rem",
  height: "2rem",
});

interface HeadingProps {
  children: React.ReactNode;
  area: string;
  icon: string;
}

export function Heading({ children, area, icon }: HeadingProps) {
  return (
    <Heading1
      layout={{ "@initial": "landscape", "@mobile": "portrait" }}
      css={{ gridArea: area }}
    >
      <Icon src={icon} />
      {children}
    </Heading1>
  );
}
