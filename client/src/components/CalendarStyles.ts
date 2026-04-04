import styled from "@emotion/styled";

import headerBg from "../assets/background.jpg";

export const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 190, 92, 0.18),
      transparent 26%
    ),
    linear-gradient(180deg, #f9fbff 0%, #eef2f7 100%);
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 8px;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: rgba(255, 255, 255, 0.14);
  padding: 4px 10px;
  border-radius: 999px;

  @media (max-width: 768px) {
    max-width: 180px;
    font-size: 13px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.24);
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 999px;
  transition: all 0.2s ease;
  font-weight: 700;
  text-transform: uppercase;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.26);
  color: white;
  font-size: 12px;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 999px;
  transition: all 0.2s ease;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.38);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const AuthCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: #e8e8e8;
  padding: 0px 25px;
  border-radius: 6px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  color: white;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  padding: 5px;
  background: none;
  border: none;
  color: #d13900;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: #b12f00;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 26px;
  margin-bottom: 24px;
  font-weight: 700;
  color: #d13900;
`;

export const InputGroup = styled.div`
  margin-bottom: 18px;
  label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    font-weight: 600;
    color: #888888;
  }
  input {
    width: 100%;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.53);
    border: 1px solid rgba(255, 255, 255, 0.98);
    border-radius: 6px;
    color: #393939;
    font-size: 15px;
    outline: none;
    transition: all 0.2s;
    &:focus {
      border-color: #d13900;
      background: rgba(255, 255, 255, 0.08);
    }
    &::placeholder {
      color: #c5c5c5;
    }
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  input {
    padding-right: 45px;
  }
`;

export const ErrorMessage = styled.div`
  background: rgba(255, 77, 79, 0.1);
  color: #ff4d4f;
  padding: 10px;
  border-radius: 6px;
  font-size: 13px;
  margin-bottom: 15px;
  text-align: center;
  border: 1px solid rgba(255, 77, 79, 0.2);
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #d13900;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;
  &:hover {
    background: #b12f00;
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;
  span {
    color: #d13900;
    cursor: pointer;
    font-weight: 600;
    margin-left: 6px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
`;

export const TopBar = styled.div`
  min-height: 60px;
  padding: 10px 14px;
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
  background-color: rgba(91, 36, 0, 0.28);
  box-shadow: 0 10px 24px rgba(80, 38, 0, 0.18);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const LangSwitcher = styled.div`
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.18);
  padding: 3px;
  border-radius: 999px;
  margin-left: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(8px);
`;

export const LangButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "#ff9f1a" : "white")};
  border: none;
  border-radius: 6px;
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
  background: rgba(255, 255, 255, 0.84);
  backdrop-filter: blur(12px);
  min-height: 56px;
  padding: 8px 12px;
  display: grid;
  grid-template-columns: auto 1fr minmax(220px, 300px);
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const CenterTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
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
  padding: 4px 6px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.12);

  &:hover {
    opacity: 1;
  }
`;

export const HeaderButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 6px;
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

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 4px 8px;
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
  border-radius: 6px;
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
  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: 32px repeat(6, minmax(0, 1fr));
  flex: 1 1 auto;
  min-height: 0;
  gap: 4px;
  padding: 4px;
  background: transparent;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-rows: 26px repeat(6, minmax(0, 1fr));
    gap: 2px;
    padding: 2px;
  }
`;

export const DayHeader = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #686c6f;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const DayCell = styled.div<{
  isCurrentMonth?: boolean;
  isToday?: boolean;
}>`
  background: ${(props) =>
    props.isCurrentMonth === false
      ? "linear-gradient(180deg, #ececec 0%, #e7e7e7 100%)"
      : props.isToday
        ? "linear-gradient(180deg, #fff3dd 0%, #ffe4b5 100%)"
        : "linear-gradient(180deg, #e8ecef 0%, #e2e7ea 100%)"};
  padding: 8px 6px 6px 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.isToday ? "1px solid #ff9f1a" : "1px solid rgba(255, 255, 255, 0.7)"};
  box-shadow: ${(props) =>
    props.isToday
      ? "0 0 0 2px rgba(255, 159, 26, 0.18), inset 0 1px 0 rgba(255,255,255,0.5)"
      : "inset 0 1px 0 rgba(255, 255, 255, 0.5)"};
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 8px 18px rgba(15, 23, 42, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    padding: 6px 4px;
    border-radius: 6px;
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
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    gap: 2px;
    padding-right: 0;
  }
`;

export const DayHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  flex-shrink: 0;
`;

export const DayNumber = styled.span<{ isToday?: boolean }>`
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => (props.isToday ? "#9a4b00" : "#4d4d4d")};
  margin-bottom: 4px;
  background: ${(props) =>
    props.isToday ? "rgba(255,255,255,0.82)" : "transparent"};
  border-radius: 999px;
  padding: ${(props) => (props.isToday ? "1px 6px" : "0")};
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
  width: 100%;
  min-width: 0;
`;

export const Label = styled.div<{ color?: string }>`
  width: 32px;
  height: 8px;
  border-radius: 6px;
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
  align-items: center;
  gap: 3px;
  margin-bottom: 4px;
  width: calc(100% - 20px);
  min-width: 0;
  overflow: hidden;
  flex-wrap: nowrap;

  @media (max-width: 900px) {
    gap: 2px;
    margin-bottom: 3px;
    width: calc(100% - 18px);
  }
`;

export const LabelBar = styled.div<{ color: string }>`
  height: 8px;
  flex: 0 0 calc((100% - 9px) / 4);
  width: calc((100% - 9px) / 4);
  min-width: 0;
  max-width: calc((100% - 9px) / 4);
  border-radius: 999px;
  background-color: ${(props) => props.color};

  &:hover {
    filter: brightness(90%);
  }

  @media (max-width: 900px) {
    height: 6px;
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
  max-width: 100%;
  height: 20px;
  border-radius: 6px;
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

  @media (max-width: 768px) {
    width: 38px;
    height: 18px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const TaskContainer = styled.div`
  background: white;
  border-radius: 6px;
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
  border-radius: 8px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.2);
  padding: 6px 24px 6px 8px;
  font-size: 13px;
  color: #172b4d;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdfe3;
  border-bottom: 2px solid #dcdfe3;
  position: relative;
  transition: background-color 0.2s;
  overflow: hidden;
  min-width: 0;

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
    font-size: 22px;
    padding: 0;
    line-height: 1;
    display: none;
    z-index: 10;
  }

  &:hover button {
    display: block;
  }

  @media (max-width: 900px) {
    padding: 5px 6px;
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
  min-width: 0;
  line-height: 1.35;
  max-height: 4em;

  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

export const TaskNumber = styled.span`
  color: #7a7f85;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 72px;
  flex-shrink: 1;

  @media (max-width: 900px) {
    font-size: 10px;
    max-width: 54px;
  }
`;

export const TaskDotsRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
`;

export const TaskDot = styled.span<{ color?: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) =>
    props.color || "linear-gradient(135deg, #ff8a00 0%, #ff5e62 100%)"};
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.85);
  flex-shrink: 0;
`;

export const HolidayLabel = styled.div`
  background: #fff0f0;
  color: #c62828;
  box-shadow: 0 1px 0 rgba(238, 156, 148, 0.22);
  border: 1px solid #ffc8c8;
  border-radius: 8px;
  padding: 4px 6px;
  font-size: 12px;
  line-height: 1.25;
  cursor: default;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 3px 5px;
  }
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
  position: relative;
  background: linear-gradient(180deg, #f9fbff 0%, #f2f5fb 100%);
  padding: 24px;
  border-radius: 16px;
  width: min(420px, calc(100vw - 24px));
  max-height: calc(100vh - 32px);
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(9, 30, 66, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

export const Button = styled.button`
  padding: 8px 14px;
  background: linear-gradient(135deg, #5aac44 0%, #4e9b3d 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(90, 172, 68, 0.18);
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (min-width: 769px) {
    max-width: 300px;
    margin-left: auto;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid #bbb4b7;
  border-radius: 8px;
  padding: 6px 8px 6px 28px;
  font-size: 14px;
  width: 100%;
  min-width: 0;
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
  border-radius: 10px;
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

  @media (max-width: 768px) {
    min-height: 84px;
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 100%;
  background: white;
  border-radius: 6px;
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
