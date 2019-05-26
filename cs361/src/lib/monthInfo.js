import {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
} from '../constants/months';

import {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
  daysByIndex,
} from '../constants/daysOfWeek';

const NUM_DAYS = {
  [January]: 31,
  [March]: 31,
  [April]: 30,
  [May]: 31,
  [June]: 30,
  [July]: 31,
  [August]: 31,
  [September]: 30,
  [October]: 31,
  [November]: 30,
  [December]: 31,
};

const isLeapYear = year => year % 4 === 0 && (
  year % 100 !== 0 || year % 400 === 0
);

const getNumDays = (month, year) => {
  if (month === February) {
    if (isLeapYear(year)) {
      return 29;
    }
    return 28;
  }
  return NUM_DAYS[month];
};

const monthInfo = (month, year) => {
  const numDays = getNumDays(month, year);
  const firstDay = new Date(`${month} 1, ${year}`);
  const lastDay = new Date(`${month} ${numDays}, ${year}`);
  const startsOn = daysByIndex[firstDay.getDay()];
  const endsOn = daysByIndex[lastDay.getDay()];
  return {
    month,
    year,
    numDays,
    startsOn,
    endsOn,
  };
};

export default monthInfo;
