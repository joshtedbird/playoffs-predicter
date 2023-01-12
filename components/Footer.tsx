import { useState } from "react";
import { useStore } from "../lib/store";
import { styled } from "../stitches.config";

const Container = styled("div", {
  width: "100%",
  backgroundColor: "$surface100",
  borderTop: "1px solid $border100",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Input = styled("input", {
  width: "100%",
  maxWidth: "15rem",
  padding: "0.5rem",
  marginTop: "$matchup",
  fontSize: "$body",
  textAlign: "center",

  borderRadius: "0.5rem",
  border: "1px solid $border100",

  backgroundColor: "$surface100",
});

const BtnSubmit = styled("div", {
  width: "100%",
  maxWidth: "14rem",
  padding: "1rem",
  margin: "$matchup 0",

  fontWeight: "$bold",

  borderRadius: "0.5rem",
  border: "1px solid $border100",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  userSelect: "none",

  transition: "all 0.3s",

  variants: {
    active: {
      false: {
        backgroundColor: "$surface200",
        color: "$font300",
      },
      true: {
        backgroundColor: "$highlight",
        color: "#fff",
        "&:hover": {
          backgroundColor: "$highlightHover",
        },
      },
    },
  },
});

export function Footer() {
  const [name, changeName] = useState("");
  const winner = useStore((s) => s.winner);

  const handleChange = (e: any) => {
    changeName(e.target.value);
  };

  return (
    <Container>
      <Input
        placeholder="Name"
        value={name}
        onChange={(e: any) => handleChange(e)}
      />
      <BtnSubmit
        active={winner && name.length > 0 ? true : false}
        onClick={() => alert(winner?.team + name)}
      >
        Submit
      </BtnSubmit>
    </Container>
  );
}
