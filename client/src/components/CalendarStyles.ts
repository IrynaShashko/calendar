import styled from "@emotion/styled";

import headerBg from "../assets/background.jpg";

export const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100dvw;
  background-color: #f4f5f7;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100dvw;
`;

export const TopBar = styled.div`
  height: 40px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: white;
  background-image: url(${headerBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const LangSwitcher = styled.div`
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px;
  border-radius: 4px;
  margin-left: 10px;
`;

export const LangButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "#ff9f1a" : "white")};
  border: none;
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${(props) =>
      props.active ? "white" : "rgba(255, 255, 255, 0.1)"};
  }
`;

export const BottomBar = styled.div`
  background: #f4f5f7;
  height: 48px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

export const CenterTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  background: linear-gradient(135deg, #ff9f1a 0%, #ffb142 100%);
  height: 48px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

export const HeaderBrand = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const HeaderButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 3px;
  color: #4d4d4d;
  padding: 6px 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s;
  text-transform: capitalize;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const HeaderIcon = styled.span`
  font-size: 20px;
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
  margin-left: 6px;
`;

export const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavButtonGroup = styled.div`
  display: flex;
  gap: 2px;
  margin-right: 12px;
`;

export const NavButton = styled.button`
  background: #ebecf0;
  border: 1px solid #dfe1e6;
  border-radius: 3px;
  width: 32px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
  color: #a8a8a8;
  span {
    font-size: 18px;
    line-height: 0;
    display: block;
  }

  &:hover {
    background: #e4e5e8;
    border-color: #dfe1e6;
  }
`;

export const MonthTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  flex-grow: 1;
  text-align: center;
  color: #4d4d4d;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 40px repeat(5, minmax(0, 1fr));
  flex-grow: 1;
  gap: 3px;
  background-color: #f4f5f7;
  height: 100%;
  overflow: hidden;
`;

export const DayHeader = styled.div`
  background: #f4f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #838c91;
  font-size: 12px;
  font-weight: 400;
`;

export const DayCell = styled.div<{ isCurrentMonth?: boolean }>`
  background: ${(props) =>
    props.isCurrentMonth === false ? "#EBEBEB" : "#E3E5E6"};
  padding: 8px 4px 4px 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.isCurrentMonth === false ? "#EBEBEB" : "#e1e1e1"};
  }
`;

export const TaskScrollContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-right: 4px;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

export const DayHeaderRow = styled.div`
  display: flex;
  gap: 4px;
  flex-shrink: 0;
`;

export const DayNumber = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #4d4d4d;
  margin-bottom: 4px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
`;

export const Label = styled.div<{ color?: string }>`
  width: 32px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.color || "#61bd4f"};
`;

export const LabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
`;

export const LabelBarContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
`;

export const LabelBar = styled.div<{ color: string }>`
  height: 8px;
  width: 40px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  &:hover {
    filter: brightness(90%);
  }
`;

export const LabelsSection = styled.div`
  margin-bottom: 15px;
`;

export const LabelsTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #5e6c84;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

export const LabelsGrid = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const LabelPill = styled.div<{ color: string; isSelected: boolean }>`
  width: 45px;
  height: 20px;
  border-radius: 16px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.1s ease;
  border: ${(props) => (props.isSelected ? "2px solid #000" : "none")};

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const TaskContainer = styled.div`
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  padding: 6px 8px 4px;
  margin-bottom: 4px;
  cursor: pointer;
  border: 1px solid #ddd;

  &:hover {
    background-color: #f4f5f7;
  }
`;

export const TaskCard = styled.div`
  background: white;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.2);
  padding: 6px 8px;
  font-size: 13px;
  color: #172b4d;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdfe3;
  border-bottom: 2px solid #dcdfe3;
  position: relative;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f4f5f7;
    border-bottom-color: #c1c7d0;
  }

  button {
    position: absolute;
    top: 2px;
    right: 4px;
    background: none;
    border: none;
    color: #eb5a46;
    cursor: pointer;
    font-size: 24px;
    padding: 0;
    line-height: 1;
    display: none;
    z-index: 10;
  }

  &:hover button {
    display: block;
  }
`;

export const TaskTitle = styled.div`
  font-size: 13px;
  color: #172b4d;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  line-height: 1.4;
  max-height: 4em;
`;

export const TaskNumber = styled.span`
  color: #aaa;
  font-size: 12px;
`;

export const HolidayLabel = styled.div`
  background: #fdf2f2;
  color: #cf222e;
  box-shadow: 0 1px 0 rgba(238, 156, 148, 0.2);
  border: 1px solid #f9d7d9;
  padding: 2px 4px;
  border-radius: 3px;
  padding: 6px 8px;
  font-size: 13px;
  cursor: default;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.64);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background: #f4f5f7;
  padding: 24px;
  border-radius: 4px;
  width: 400px;
  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25);
`;

export const Button = styled.button`
  padding: 6px 12px;
  background: #5aac44;
  color: white;
  border: none;
  border-radius: 3px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #519839;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: "🔍";
    position: absolute;
    left: 8px;
    font-size: 12px;
    opacity: 0.7;
    pointer-events: none;
    filter: grayscale(1) brightness(2);
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #bbb4b7;
  border-radius: 3px;
  padding: 6px 8px 6px 28px;
  font-size: 14px;
  width: 100%;
  transition:
    width 0.2s,
    background 0.2s;

  &::placeholder {
    color: rgb(208, 208, 208);
  }

  &:focus {
    outline: none;
    background: white;
  }
`;

export const TextArea = styled.textarea`
  background: rgba(219, 218, 218, 0.4);
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  width: 100%;
  transition:
    width 0.2s,
    background 0.2s;
  min-height: 100px;
  resize: vertical;
  line-height: 1.5;
  overflow-y: auto;
  font-family: inherit;

  &::placeholder {
    color: #838c91;
  }

  &:focus {
    outline: none;
    color: #172b4d;
    background: rgba(219, 218, 218, 0.6);
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 100%;
  background: white;
  border-radius: 3px;
  box-shadow:
    0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
`;

export const ResultItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  border-bottom: 1px solid #ebecf0;
  display: flex;
  flex-direction: column;
  gap: 2px;

  &:last-child {
    border: none;
  }

  &:hover {
    background: #f4f5f7;
  }
`;

export const ResultItemTitle = styled.span`
  font-weight: 600;
  color: #172b4d;
  font-size: 14px;
`;

export const ResultItemDate = styled.span`
  font-size: 11px;
  color: #5e6c84;
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
