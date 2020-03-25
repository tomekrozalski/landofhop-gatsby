import { getMonth, getYear } from 'date-fns';

const generateMonthArray = (until: Date) => {
  const from = { month: 5, year: 2017 };
  const to = { month: getMonth(until), year: getYear(until) };
  const months = [];

  // eslint-disable-next-line prefer-destructuring
  for (let year = from.year; year <= to.year; year += 1) {
    const fromMonth = year === from.year ? from.month : 0;
    const toMonth = year === to.year ? to.month : 11;
    for (let month = fromMonth; month <= toMonth; month += 1) {
      months.push({ beverages: 0, month, year });
    }
  }

  return months;
};

export default generateMonthArray;
