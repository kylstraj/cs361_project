import React from 'react';
import PropTypes from 'prop-types';

import MonthTitle from './MonthTitle';
import MonthGrid from './MonthGrid';

const Month = ({
  month,
  year,
}) => (
  <div className="month-container">
    <MonthTitle month={month} year={year} />
    <MonthGrid month={month} year={year} />
  </div>
);

MonthGrid.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default Month;
