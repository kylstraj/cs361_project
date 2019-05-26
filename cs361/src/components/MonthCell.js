import React from 'react';
import PropTypes from 'prop-types';

const MonthCell = ({
  date,
  month,
  year,
  empty,
}) => (
  empty ?
    <div /> :
    (
      <div className="month-cell">
        {date}
      </div>
    )
);

MonthCell.propTypes = {
  date: PropTypes.number,
  month: PropTypes.string,
  year: PropTypes.string,
  empty: PropTypes.bool,
};

export default MonthCell;
