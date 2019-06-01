import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {monthNumToName, monthNameToNum, getCurMonth, getCurYear, getNextMonth, getNextMonthYear, getPrevMonth, getPrevMonthYear} from '../lib/monthFunctions';

const MonthTitle = ({
  month,
  year,
}) => (
  <span><Link to={"/month/" + getPrevMonth(month) + "/" + getPrevMonthYear(month,year)}> prev </Link>
  <h2> {month} {year} </h2>
  <Link to={"/month/" + getNextMonth(month) + "/" + getNextMonthYear(month,year)}> next </Link></span>
);

MonthTitle.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default MonthTitle;
