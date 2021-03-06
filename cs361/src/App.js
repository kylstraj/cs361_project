import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Month from './components/Month';
import { June } from './constants/months';
import { School, Work, Finance } from './constants/eventTypes';
import { addEvent } from './reducers/events/eventsActions';

import './App.css';

const mapDispatchToProps = { addEvent };

const events = [
  {
    id: 1,
    type: School,
    title: 'Do cs361 assignment',
    location: 'Chicago',
    date: {
      year: '2019',
      month: June,
      day: 2,
    },
    startTime: {
      hour: 6,
      minute: 0,
    },
    endTime: {
      hour: 20,
      minute: 0,
    },
  },
  {
    id: 2,
    title: 'Group meeting',
    type: School,
    location: 'google hangouts',
    date: {
      year: '2019',
      month: June,
      day: 2,
    },
    startTime: {
      hour: 20,
      minute: 0,
    },
    endTime: {
      hour: 20,
      minute: 30,
    },
  },
  {
    id: 3,
    title: 'Exam',
    type: School,
    location: 'ProctorU',
    date: {
      year: '2019',
      month: June,
      day: 9,
    },
    startTime: {
      hour: 12,
      minute: 30,
    },
    endTime: {
      hour: 13,
      minute: 30,
    },
  },
  {
    id: 4,
    title: 'Presentation',
    type: Work,
    location: 'The office',
    date: {
      year: '2019',
      month: June,
      day: 12,
    },
    startTime: {
      hour: 12,
      minute: 30,
    },
    endTime: {
      hour: 13,
      minute: 30,
    },
  },
  {
    id: 5,
    title: 'Pay rent',
    type: Finance,
    location: 'Online',
    date: {
      year: '2019',
      month: June,
      day: 30,
    },
    startTime: {
      hour: 12,
      minute: 30,
    },
    endTime: {
      hour: 13,
      minute: 30,
    },
  },
  {
    id: 6,
    type: Finance,
    title: 'Pay credit card',
    location: 'Chicago',
    date: {
      year: '2019',
      month: June,
      day: 2,
    },
    startTime: {
      hour: 9,
      minute: 0,
    },
    endTime: {
      hour: 20,
      minute: 0,
    },
  },
];

class AppComponent extends React.Component {
  componentDidMount() {
    document.title = 'College Student Helper';
    this.injectEvents(events);
  }

  injectEvents(events) {
    events.forEach(event => {
      this.props.addEvent(event);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route
            path="/month/:month/:year"
            render={({match}) => (
              <Month {...match.params} />
            )}
          />
          <Route path="/week" render={() => <div>Weekly view</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export { AppComponent };
export default connect(null, mapDispatchToProps)(AppComponent);
