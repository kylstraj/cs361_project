import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import MonthCell from './MonthCell';
import monthInfo from '../lib/monthInfo';
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

const getDatesInWeek = (month, year, week) => {
  const info = monthInfo(month, year);
  const result = {
    [Sunday]: -1,
    [Monday]: -1,
    [Tuesday]: -1,
    [Wednesday]: -1,
    [Thursday]: -1,
    [Friday]: -1,
    [Saturday]: -1,
  };

  const dateOfFirstSunday = 1 - daysByIndex.indexOf(info.startsOn);
  let date = dateOfFirstSunday + 7 * week;
  daysByIndex.forEach(day => {
    result[day] = date;
    date += 1;
  });

  return result;
};

const renderWeek = (month, year, week) => {
  const datesInWeek = getDatesInWeek(month, year, week);
  const { numDays } = monthInfo(month, year);
  return (
    <tr key={`${month}-${week}`}>
      {daysByIndex.map(day => (
        <td key={`${day}-${week}`}>
          <MonthCell
            date={datesInWeek[day]}
            month={month}
            year={year}
            empty={datesInWeek[day] < 1 || datesInWeek[day] > numDays}
          />
        </td>
      ))
      }
    </tr>
  );
};

const weeksInMonth = (month, year) => {
  const { numDays, startsOn } = monthInfo(month, year);
  console.log(startsOn);
  const daysInFirstWeek = 7 - daysByIndex.indexOf(startsOn);
  return Math.ceil((numDays - daysInFirstWeek) / 7) + 1;
};

const renderGrid = (month, year) => {
  const numWeeks = weeksInMonth(month, year);
  return _.range(0, numWeeks).map(week => renderWeek(month, year, week));
};

const MonthGrid = ({
  month,
  year,
}) => (
  <div className="month-grid-container">
    <table className="month-grid">
      <thead>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </thead>
      <tbody>
        {renderGrid(month, year)}
      </tbody>
    </table>
  </div>
);

MonthGrid.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default MonthGrid;
