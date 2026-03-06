/** @jsxImportSource @emotion/react */
import {
  BottomBar,
  ButtonsWrapper,
  CenterTitle,
  DatePickerWrapper,
  HeaderBrand,
  HeaderButton,
  HeaderIcon,
  HeaderTitle,
  HeaderWrapper,
  HiddenInput,
  Input,
  LangButton,
  LangSwitcher,
  LoginButton,
  LogoutButton,
  NavButton,
  NavButtonContainer,
  NavButtonGroup,
  NavigationContainer,
  ResultItem,
  ResultItemDate,
  ResultItemTitle,
  SearchContainer,
  SearchInputWrapper,
  SearchResults,
  SearchWrapper,
  TopBar,
  UserContainer,
  UserName,
} from "./CalendarStyles";

import { useAuth } from "src/context/AuthContext";
import type { HeaderProps } from "src/types/calendar.types";

export const Header = ({
  handlePrevMonth,
  handleNextMonth,
  viewDate,
  setViewDate,
  searchQuery,
  setSearchQuery,
  filteredResults,
  goToTask,
  translations,
}: HeaderProps) => {
  const { language, setLanguage, user, logout, openAuthModal } = useAuth();
  return (
    <HeaderWrapper>
      <TopBar>
        <HeaderBrand>
          <HeaderIcon>📅</HeaderIcon>
          <HeaderTitle>{translations.brandName}</HeaderTitle>
        </HeaderBrand>

        <ButtonsWrapper>
          <NavigationContainer>
            {user ? (
              <UserContainer>
                <UserName title={user.name}>
                  {translations.userPrefix} {user.name}
                </UserName>
  
                <LogoutButton onClick={logout}>
                  {translations.logout}
                </LogoutButton>
              </UserContainer>
            ) : (
              <LoginButton onClick={openAuthModal}>
                {translations.login}
              </LoginButton>
            )}
          </NavigationContainer>
  
          <LangSwitcher>
            <LangButton
              active={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </LangButton>
  
            <LangButton
              active={language === "uk"}
              onClick={() => setLanguage("uk")}
            >
              UA
            </LangButton>
          </LangSwitcher>
        </ButtonsWrapper>
      </TopBar>

      <BottomBar>
        <NavButtonContainer>
          <NavButtonGroup>
            <NavButton
              onClick={handlePrevMonth}
              title={translations.prevMonth}
            >
              <span>︿</span>
            </NavButton>
            <NavButton
              onClick={handleNextMonth}
              title={translations.nextMonth}
            >
              <span>﹀</span>
            </NavButton>
          </NavButtonGroup>
        </NavButtonContainer>

        <CenterTitle>
          <DatePickerWrapper>
            <HeaderButton>
              {viewDate.toLocaleString(language === "uk" ? "uk-UA" : "en-US", {
                month: "long",
                year: "numeric",
              })}
            </HeaderButton>
            <HiddenInput
              type="date"
              onChange={(e) =>
                e.target.value && setViewDate(new Date(e.target.value))
              }
            />
          </DatePickerWrapper>
        </CenterTitle>

        <SearchWrapper>
          <SearchContainer>
            <SearchInputWrapper>
              <Input
                placeholder={translations.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && filteredResults.length > 0 && (
                <SearchResults>
                  {filteredResults.map((t) => (
                    <ResultItem
                      key={t._id}
                      onClick={() => {
                        goToTask(t);
                        setSearchQuery("");
                      }}
                    >
                      <ResultItemTitle>{t.title}</ResultItemTitle>
                      <ResultItemDate>
                        {new Date(t.date).toLocaleDateString(
                          language === "uk" ? "uk-UA" : "en-US",
                          {
                            day: "numeric",
                            month: "short",
                          },
                        )}
                      </ResultItemDate>
                    </ResultItem>
                  ))}
                </SearchResults>
              )}
            </SearchInputWrapper>
          </SearchContainer>
        </SearchWrapper>
      </BottomBar>
    </HeaderWrapper>
  );
};
