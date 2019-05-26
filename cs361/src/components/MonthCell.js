import React from 'react';
import PropTypes from 'prop-types';

const MonthCell = ({
  date,
  month,
  year,
}) => (
  <div>{month} {date}, {year}</div>
);

MonthCell.propTypes = {
  date: PropTypes.number,
  month: PropTypes.string,
  year: PropTypes.string,
};

export default MonthCell;
