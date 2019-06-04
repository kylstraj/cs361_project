import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getNextMonth, getNextMonthYear, getPrevMonth, getPrevMonthYear } from '../lib/monthFunctions';

const MonthTitle = ({
  month,
  year,
}) => (
  <div className="d-flex justify-content-center align-items-baseline" >
    <Link className="mx-3" to={"/month/" + getPrevMonth(month) + "/" + getPrevMonthYear(month,year)}> &lt; prev </Link>
  <h2> {month} {year} </h2>
  <Link className="mx-3" to={"/month/" + getNextMonth(month) + "/" + getNextMonthYear(month,year)}>  next &gt; </Link></div>
);

MonthTitle.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default MonthTitle;
