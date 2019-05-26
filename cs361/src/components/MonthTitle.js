import React from 'react';
import PropTypes from 'prop-types';

const MonthTitle = ({
  month,
  year,
}) => (
  <h2>{month} {year}</h2>
);

MonthTitle.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default MonthTitle;
