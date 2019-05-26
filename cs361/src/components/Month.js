import React from 'react';

import MonthTitle from './MonthTitle';
import MonthGrid from './MonthGrid';

const Month = () => (
  <div className="month-container">
    <MonthTitle month="June" year="2019" />
    <MonthGrid month="June" year="2019" />
  </div>
);

export default Month;
