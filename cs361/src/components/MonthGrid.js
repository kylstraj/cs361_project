import React from 'react';
import PropTypes from 'prop-types';

const MonthGrid = ({
  month,
  year,
}) => (
  <h2>MonthGrid</h2>
);

MonthGrid.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
};

export default MonthGrid;
