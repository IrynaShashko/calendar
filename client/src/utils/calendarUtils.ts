import type { TaskType } from "@shared/task.interface";
import type { CalendarDay, Holiday } from "src/types/calendar.types";


export const generateCalendarDays = (
  viewDate: Date,
  tasks: TaskType[],
  holidays: Holiday[],
  searchQuery: string,
): CalendarDay[] => {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const startDayOfWeek = firstDayOfMonth.getDay();

  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - startDayOfWeek);

  const calendarCells = [];
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

    const dayTasks = tasks
      .filter((t) => {
        const taskDate = new Date(t.date);
        const matchesDate = taskDate.toDateString() === date.toDateString();
        const matchesSearch = t.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return matchesDate && matchesSearch;
      })
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    calendarCells.push({
      date,
      isCurrentMonth: date.getMonth() === month,
      dayHolidays: holidays.filter((h) => h.date === dateStr),
      dayTasks,
    });
  }
  return calendarCells;
};

export const getCardLabel = (count: number, lang: "en" | "uk") => {
  if (lang === "en") return count === 1 ? "card" : "cards";
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return "карток";
  if (lastDigit === 1) return "картка";
  if (lastDigit >= 2 && lastDigit <= 4) return "картки";
  return "карток";
};
