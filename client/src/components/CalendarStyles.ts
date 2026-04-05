import styled from "@emotion/styled";

import headerBg from "../assets/background.png";

export const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
  gap: 0;
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 190, 92, 0.18),
      transparent 26%
    ),
    linear-gradient(180deg, #f9fbff 0%, #eef2f7 100%);
  padding: 12px;
  gap: 12px;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: stretch;
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
  border-radius: 18px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  color: white;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  /* width: 36px;
  height: 36px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  /* background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(209, 57, 0, 0.12); */
  /* border-radius: 50%; */
  background: none;
  border: none;
  box-shadow: none;
  color: #53535395;
  cursor: pointer;

  &:hover {
    color: #535353b6;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 26px;
  margin-bottom: 24px;
  font-weight: 700;
  color: #c08497;
`;

export const InputGroup = styled.div`
  margin-bottom: 18px;
  label {
    display: flex;
    align-items: center;
    gap: 6px;
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
      border-color: #a36a7e;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  background: #c08497;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 10px;
  border-radius: 28px;
  &:hover {
    background: #a36a7e;
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
    color: #c08497;
    cursor: pointer;
    font-weight: 600;
    margin-left: 6px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HeaderContainer = styled.div`
  background: linear-gradient(135deg, #c08497 0%, #a36a7e 100%);
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
  min-width: 0;
  gap: 4px;
  padding: 10px;
  background: rgba(255, 252, 247, 0.82);
  border-radius: 24px;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-rows: 26px repeat(6, minmax(0, 1fr));
    gap: 2px;
    padding: 6px 4px 4px;
    border-radius: 18px;
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
        ? "linear-gradient(180deg, #fcf5f7 0%, #f4e8eb 100%)" /* Ніжний рожевий фон для активного дня */
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
    props.isToday
      ? "1px solid #C08497"
      : "1px solid rgba(255, 255, 255, 0.7)"}; /* Ваш акцентний колір */
  box-shadow: ${(props) =>
    props.isToday
      ? "0 0 0 2px rgba(192, 132, 151, 0.25), inset 0 1px 0 rgba(255,255,255,0.7)" /* Світіння акцентним кольором */
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
// export const DayCell = styled.div<{
//   isCurrentMonth?: boolean;
//   isToday?: boolean;
// }>`
//   background: ${(props) =>
//     props.isCurrentMonth === false
//       ? "linear-gradient(180deg, #ececec 0%, #e7e7e7 100%)"
//       : props.isToday
//         ? "linear-gradient(180deg, #fff3dd 0%, #ffe4b5 100%)"
//         : "linear-gradient(180deg, #e8ecef 0%, #e2e7ea 100%)"};
//   padding: 8px 6px 6px 8px;
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   min-height: 0;
//   overflow: hidden;
//   position: relative;
//   border-radius: 10px;
//   cursor: pointer;
//   border: ${(props) =>
//     props.isToday ? "1px solid #ff9f1a" : "1px solid rgba(255, 255, 255, 0.7)"};
//   box-shadow: ${(props) =>
//     props.isToday
//       ? "0 0 0 2px rgba(255, 159, 26, 0.18), inset 0 1px 0 rgba(255,255,255,0.5)"
//       : "inset 0 1px 0 rgba(255, 255, 255, 0.5)"};
//   transition:
//     transform 0.15s ease,
//     box-shadow 0.15s ease,
//     background-color 0.15s ease;

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow:
//       0 8px 18px rgba(15, 23, 42, 0.06),
//       inset 0 1px 0 rgba(255, 255, 255, 0.7);
//   }

//   @media (max-width: 768px) {
//     padding: 6px 4px;
//     border-radius: 6px;
//   }
// `;

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
  font-weight: ${(props) => (props.isToday ? "800" : "700")};
  font-size: 12px;
  color: ${(props) => (props.isToday ? "#A36A7E" : "#4d4d4d")};
  margin-bottom: 4px;
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
  width: 100%;
  height: 8px;
  margin-bottom: 0;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

export const LabelBar = styled.div<{ color: string }>`
  width: 100%;
  height: 8px;
  background-color: ${(props) => props.color};
  border-radius: 8px 8px 0 0;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(90%);
  }
  @media (max-width: 900px) {
    height: 6px;
    border-radius: 6px 6px 0 0;
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

export const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px 10px 8px;
  width: 100%;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
`;

export const TaskDot = styled.span<{ color?: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) =>
    props.color || "linear-gradient(135deg, #e1dfdf 0%, #b4b2b2 100%)"};
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.85);
  flex-shrink: 0;
`;

export const HolidayLabel = styled.div`
  background: #f8e0e0;
  color: #b86c6d;
  box-shadow: 0 1px 0 rgba(238, 156, 148, 0.22);
  border: 1px solid #b86c6d;
  border-radius: 8px;
  padding: 4px 6px;
  font-size: 12px;
  line-height: 1.25;
  cursor: default;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  flex: 0 0 auto;
  min-height: fit-content;
  word-break: break-word;

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
  background: rgba(0, 0, 0, 0.5);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  background: linear-gradient(135deg, #c08497 0%, #a36a7e 100%);
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
    box-shadow: 0 8px 16px rgba(192, 132, 151, 0.18);
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

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  gap: 14px;
  padding: 12px;
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      rgba(17, 24, 39, 0.44) 0%,
      rgba(17, 24, 39, 0.74) 100%
    ),
    url(${headerBg});
  background-size: cover;
  background-position: center;
  border-radius: 0 0 24px 24px;
  box-shadow: 0 18px 44px rgba(15, 23, 42, 0.16);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.18) 0%,
      rgba(15, 23, 42, 0.48) 100%
    );
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
  border-radius: 18px;
  @media (min-width: 1024px) {
    top: 12px;
    width: min(390px, 20vw);
    min-width: 320px;
    max-width: 410px;
    min-height: calc(100dvh - 24px);

    padding: 18px;
  }

  @media (max-width: 768px) {
    padding: 12px;
    gap: 12px;
  }
`;

export const TopBar = styled.div`
  min-height: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: stretch;
  position: relative;
  background: transparent;
  box-shadow: none;
`;

export const HeaderBrand = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 12px;
  /* width: 100%;
  max-width: 100%; */
  padding: 12px 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const HeaderIcon = styled.span`
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  color: #fff;
  background: linear-gradient(135deg, #ffb347 0%, #ff8a00 100%);
  box-shadow: 0 8px 18px rgba(255, 138, 0, 0.3);
  flex-shrink: 0;
`;

export const HeaderTitle = styled.span`
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  font-size: clamp(20px, 2vw, 26px);
  letter-spacing: 0.02em;
  color: #fffaf2;
`;

export const ButtonsWrapper = styled.div`
  grid-area: controls;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  /* align-items: stretch; */
  /* justify-content: flex-start; */
  gap: 12px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  /* width: 100%; */
`;

export const UserContainer = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  gap: 10px;
  /* flex-wrap: wrap; */
  /* width: 100%; */
`;

export const UserName = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 40px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  font-size: 14px;
  font-weight: 600;
  max-width: min(100%, 240px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 40px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const LoginButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.12);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.28);
  }
`;

export const LogoutButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.12);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.28);
  }
`;

export const LangSwitcher = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: flex-start; */
  /* width: 100%; */
  background: rgba(11, 18, 32, 0.28);
  padding: 4px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

export const LangButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "white" : "transparent")};
  color: ${(props) => (props.active ? "#0f172a" : "white")};
  border: none;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${(props) =>
    props.active ? "0 2px 8px rgba(15, 23, 42, 0.12)" : "none"};

  &:hover {
    background: ${(props) =>
      props.active ? "white" : "rgba(255, 255, 255, 0.1)"};
  }
`;

export const BottomBar = styled.div`
  background: transparent;
  min-height: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
  /* width: 100%;
  max-width: 100%; */
  padding: 12px 14px;
  border-radius: 20px;
  box-shadow: none;
  margin-top: auto;
  background: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
`;

export const NavButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  /* width: 50px;
  height: 50px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s ease;

  svg {
    color: #fff;
  }

  &:hover {
    background: none;
    color: #fff;
    transform: translateY(-1px);
  }
`;

export const CenterTitle = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 0;
  order: 1;
  width: 100%;
`;

export const DatePickerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 0;
`;

export const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  font-family: "Playfair Display", Georgia, serif;
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  transition: none;
  color: #efeeee;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;

  ::-webkit-calendar-picker-indicator {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  order: 3;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    position: absolute;
    left: 12px;
    color: #94a3b8;
    pointer-events: none;
    z-index: 1;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 10px 16px 10px 38px;
  font-size: 14px;
  width: 100%;
  color: #0f172a;
  transition: all 0.2s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    background: white;
    border-color: #ff9f1a;
    box-shadow: 0 0 0 4px rgba(255, 159, 26, 0.1);
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  bottom: calc(100% + 8px);
  right: 0;
  width: 100%;
  min-width: 0;
  background: white;
  border-radius: 16px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  max-height: 350px;
  overflow-y: auto;
  border: 1px solid #e2e8f0;
  padding: 8px 0;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }
`;

export const ResultItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background: #f8fafc;
    border-left-color: #ff9f1a;
  }
`;

export const ResultItemTitle = styled.span`
  font-weight: 600;
  color: #1e293b;
  font-size: 14px;
  line-height: 1.4;
`;

export const ResultItemDate = styled.span`
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
`;
