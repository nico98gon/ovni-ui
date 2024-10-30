import { styled } from "@/styled-system/jsx";

const BorderLayout = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    width: "60vw",
    border: "1px solid #c4c4c4",
    backgroundColor: "#dbdbdb",
    color: "#1f1f1f",
    padding: "auto",
    margin: "2rem 1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#dedede",
    },
  },
});

export default BorderLayout;
