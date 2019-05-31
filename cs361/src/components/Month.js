import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MonthTitle from './MonthTitle';
import MonthGrid from './MonthGrid';
import EventModal from './EventModal';
import { setDisplayedEvent } from '../reducers/events/eventsActions';

const mapStateToProps = state => ({
  displayedEvent: state.events.displayedEvent,
});

const mapDispatchToProps = { setDisplayedEvent };

const MonthComponent = ({
  month,
  year,
  displayedEvent,
  setDisplayedEvent,
}) => (
  <div className="month-container">
    <MonthTitle month={month} year={year} />
    <MonthGrid month={month} year={year} />
    { displayedEvent &&
      <EventModal
        event={displayedEvent}
        close={() => setDisplayedEvent(null)}
      />
    }
  </div>
);

MonthComponent.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  displayedEvent: PropTypes.object,
};

export { MonthComponent };
export default connect(mapStateToProps, mapDispatchToProps)(MonthComponent);
