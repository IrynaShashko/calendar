import {
  BottomBar,
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
  NavButton,
  NavButtonContainer,
  NavButtonGroup,
  ResultItem,
  ResultItemDate,
  ResultItemTitle,
  SearchContainer,
  SearchInputWrapper,
  SearchResults,
  SearchWrapper,
  TopBar,
} from "./CalendarStyles";

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
  language,
  setLanguage,
  translations,
}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <TopBar>
        <HeaderBrand>
          <HeaderIcon>📅</HeaderIcon>
          <HeaderTitle>{translations.brandName}</HeaderTitle>
        </HeaderBrand>
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
      </TopBar>

      <BottomBar>
        <NavButtonContainer>
          <NavButtonGroup>
            <NavButton onClick={handlePrevMonth} title="Попередній місяць">
              <span>︿</span>
            </NavButton>
            <NavButton onClick={handleNextMonth} title="Наступний місяць">
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
                        {new Date(t.date).toLocaleDateString("uk-UA", {
                          day: "numeric",
                          month: "short",
                        })}
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
