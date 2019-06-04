import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setDisplayedEvent } from '../reducers/events/eventsActions';

const mapStateToProps = state => ({
  events: state.events.events,
});

const mapDispatchToProps = { setDisplayedEvent };

const getEventsOnDate = (events, day, month, year) => Object.values(events)
  .filter(({ date: { day: d, month: m, year: y } }) =>
    day === d && month === m && year === y)
  .sort((a, b) => {
    if (a.startTime.hour < b.startTime.hour) {
      return -1;
    }
    else if (a.startTime.hour > b.startTime.hour) {
      return 1;
    }
    else {
      if (a.startTime.minute < b.startTime.minute) {
        return -1;
      }
      else if (a.startTime.minute > b.startTime.minute) {
        return 1;
      }
      else {
        return 0;
      }
    }
  })


const Event = ({
  title,
  onClick,
}) => (
    <div className="event" onClick={onClick}>
      {title}
    </div>
  );

const MonthCellComponent = ({
  date,
  month,
  year,
  empty,
  events,
  setDisplayedEvent,
}) => {
  const eventsOnDate = getEventsOnDate(events, date, month, year);
  console.log(eventsOnDate);
  return empty ?
    <div /> :
    (
      <div className="month-cell">
        {date}
        {eventsOnDate.map(event => (
          <Event title={event.title} onClick={() => setDisplayedEvent(event.id)} />
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
export default connect(mapStateToProps, mapDispatchToProps)(MonthCellComponent);
