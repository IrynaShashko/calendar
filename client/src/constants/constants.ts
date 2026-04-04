import { css } from "@emotion/react";

export const labelPalette = [
  { color: "#62BF50", name: "Green" },
  { color: "#F4D700", name: "Yellow" },
  { color: "#FBAD47", name: "Orange" },
  { color: "#C575E3", name: "Purple" },
  { color: "#0379C1", name: "Blue" },
];

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body,
  html,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ebedf0;
  }
  button {
    &:focus {
      outline: none;
    }
  }
`;

export const defaultDate = new Date();
