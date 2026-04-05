import { css } from "@emotion/react";

export const labelPalette = [
  { color: "#A3C2A4", name: "Green" },
  { color: "#E2D792", name: "Yellow" },
  { color: "#E5AD84", name: "Orange" },
  { color: "#B7A6C9", name: "Purple" },
  { color: "#8DA7BE", name: "Blue" },
];
// { color: "#BDE0BD", name: "Green" },
// { color: "#F6EBB0", name: "Yellow" },
// { color: "#FAD6B4", name: "Orange" },
// { color: "#DCD0F0", name: "Purple" },
// { color: "#B8D4EF", name: "Blue" },

// { color: "#7C9885", name: "Teal" },
// { color: "#A2B59F", name: "Teal" },

// { color: "#D19EAF", name: "Teal" },
// { color: "#C08497", name: "Teal" }, //acent
// { color: "#A36A7E", name: "Teal" },
// { color: "#B86C6D", name: "Teal" },
// { color: "#f8e0e0", name: "Teal" },
// { color: "#5C7AEA", name: "Teal" },
// { color: "#6A8ABF", name: "Teal" },
// { color: "#4A6FA5", name: "Teal" }, //acent
// { color: "#395A8A", name: "Teal" },

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: "Inter", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(180deg, #eef2f7 0%, #f8fafc 100%);
    color: #172b4d;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    &:focus {
      outline: none;
    }
  }
`;

export const defaultDate = new Date();
