import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
  events: state.events.events,
});

const getEventsOnDate = (events, day, month, year) => Object.values(events)
  .filter(({ date: { day: d, month: m, year: y }}) =>
    day === d && month === m && year === y);

const Event = ({
  title,
}) => (
  <div className="event">
    { title } 
  </div>
);

const MonthCellComponent = ({
  date,
  month,
  year,
  empty,
  events,
}) => {
  const eventsOnDate = getEventsOnDate(events, date, month, year);
  console.log(eventsOnDate);
  return empty ?
    <div /> :
    (
      <div className="month-cell">
        {date}
        { eventsOnDate.map(event => (
          <Event title={event.title} />
        ))}
      </div>
    )
};

MonthCellComponent.propTypes = {
  date: PropTypes.number,
  month: PropTypes.string,
  year: PropTypes.string,
  empty: PropTypes.bool,
};

export { MonthCellComponent };
export default connect(mapStateToProps)(MonthCellComponent);
