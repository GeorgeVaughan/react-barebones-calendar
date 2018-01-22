import moment from "moment";

const TODAY = moment();
export const getToday = () => TODAY;

export const getDaysInMonth = moment => {
  const startOfMonth = moment.startOf("month");
  const numberOfDays = startOfMonth.daysInMonth();

  const daysInMonth = [];
  for (let i = 0; i < numberOfDays; i++) {
    daysInMonth.push(startOfMonth.clone().add(i, "day"));
  }
  return daysInMonth;
};

export const getDaysInMonth2D = (moment, firstDayOfTheWeek = 0) => {
  const daysInMonth = getDaysInMonth(moment);
  let startDayWeekIndex = daysInMonth[0].day() - firstDayOfTheWeek;
  if (startDayWeekIndex <= 0) startDayWeekIndex = 7 + startDayWeekIndex;

  let currentDay;
  let currentTableRowI = 0;
  const table = [new Array(Math.max(startDayWeekIndex - 1, 0)).fill(null)];
  while (daysInMonth.length) {
    if (table[currentTableRowI].length >= 7) {
      currentTableRowI++;
      table.push([]);
    }
    currentDay = daysInMonth.shift();
    table[currentTableRowI].push(currentDay);
  }
  let nElementsToAppend = 7 - table[currentTableRowI].length;
  while (nElementsToAppend) {
    table[currentTableRowI].push(null);
    nElementsToAppend--;
  }
  return table;
};

export const getMonthsFrom = (startMonthMoment, numberOfMonths) => {
  const s = startMonthMoment.clone();

  const months = [];
  while (s.diff(startMonthMoment, "month") < numberOfMonths) {
    months.push(s.clone());
    s.add(1, "month");
  }
  return months;
};

export const getMonthsBetween = (startMonthMoment, endMonthMoment) =>
  getMonthsFrom(
    startMonthMoment,
    startMonthMoment.diff(endMonthMoment, "months")
  );

export const isSameDay = (lhs, rhs) =>
  moment.isMoment(lhs) &&
  moment.isMoment(rhs) &&
  lhs.date() === rhs.date() &&
  lhs.month() === rhs.month() &&
  lhs.year() === rhs.year();

export const isSameMonth = (lhs, rhs) =>
  moment.isMoment(lhs) &&
  moment.isMoment(rhs) &&
  lhs.month() === rhs.month() &&
  lhs.year() === rhs.year();

export const isWeekend = m => moment.isMoment(m) && m.day() % 6 === 0;

export const sortMoments = moments =>
  moments.sort((a, b) => {
    if (a.isAfter(b)) return 1;
    if (a.isBefore(b)) return -1;
    return 0;
  });

export const getStartAndEndDay = (day1, day2) => {
  const [startDay, endDay] = sortMoments([day1, day2]);
  return { startDay, endDay };
};
