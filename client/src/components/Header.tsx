import {
  CalendarRange,
  ChevronLeft,
  ChevronRight,
  LogIn,
  LogOut,
  Search,
  UserRound,
} from "lucide-react";

import {
  BottomBar,
  ButtonsWrapper,
  CenterTitle,
  DatePickerWrapper,
  HeaderBrand,
  HeaderButton,
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
          {/* <HeaderIcon>
            <CalendarDays size={20} strokeWidth={2.2} />
          </HeaderIcon>
          <HeaderTitle>{translations.brandName}</HeaderTitle> */}

          <ButtonsWrapper>
            <NavigationContainer>
              {user ? (
                <UserContainer>
                  <UserName title={user.name}>
                    <UserRound size={14} />
                    <span>{user.name}</span>
                  </UserName>
                  <LogoutButton onClick={logout}>
                    <LogOut size={16} />
                  </LogoutButton>
                </UserContainer>
              ) : (
                <LoginButton onClick={openAuthModal}>
                  <LogIn size={16} />
                  {translations.login}
                </LoginButton>
              )}
            </NavigationContainer>

            <LangSwitcher>
              <LangButton
                type="button"
                active={language === "en"}
                onClick={() => setLanguage("en")}
              >
                EN
              </LangButton>
              <LangButton
                type="button"
                active={language === "uk"}
                onClick={() => setLanguage("uk")}
              >
                UA
              </LangButton>
            </LangSwitcher>
          </ButtonsWrapper>
        </HeaderBrand>
      </TopBar>

      <BottomBar>
        <NavButtonContainer>
          <NavButton
            type="button"
            onClick={handlePrevMonth}
            title={translations.prevMonth}
          >
            <ChevronLeft size={22} />
          </NavButton>
          <NavButtonGroup>
            <CenterTitle>
              <DatePickerWrapper>
                <HeaderButton type="button">
                  <CalendarRange size={18} />
                  {viewDate.toLocaleString(
                    language === "uk" ? "uk-UA" : "en-US",
                    {
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </HeaderButton>
                <HiddenInput
                  type="month"
                  onChange={(e) =>
                    e.target.value && setViewDate(new Date(e.target.value))
                  }
                />
              </DatePickerWrapper>
            </CenterTitle>
          </NavButtonGroup>
          <NavButton
            type="button"
            onClick={handleNextMonth}
            title={translations.nextMonth}
          >
            <ChevronRight size={22} />
          </NavButton>
        </NavButtonContainer>

        <SearchWrapper>
          <SearchContainer>
            <SearchInputWrapper>
              <Search size={16} />
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
