import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Month from './components/Month';
import { June } from './constants/months';
import { addEvent } from './reducers/events/eventsActions';

import './App.css';

const mapDispatchToProps = { addEvent };

const events = [
  {
    id: 1,
    title: 'Do cs361 assignment',
    location: 'Chicago',
    date: {
      year: '2019',
      month: June,
      day: 2,
    },
    startTime: {
      hour: "6",
      minute: "12",
      AMPM: "PM",
    },
    endTime: {
      hour: "10",
      minute: "00",
      AMPM: "AM",
    },
  },
  {
    id: 2,
    title: 'Group meeting',
    location: 'google hangouts',
    date: {
      year: '2019',
      month: June,
      day: 2,
    },
    startTime: {
      hour: "8",
      minute: "12",
      AMPM: "PM",
    },
    endTime: {
      hour: "10",
      minute: "00",
      AMPM: "AM",
    },
  },
  {
    id: 3,
    title: 'Exam',
    location: 'ProctorU',
    date: {
      year: '2019',
      month: June,
      day: 9,
    },
    startTime: {
      hour: "6",
      minute: "12",
      AMPM: "PM",
    },
    endTime: {
      hour: "10",
      minute: "00",
      AMPM: "AM",
    },
  },
];

class AppComponent extends React.Component {
  componentDidMount() {
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
            render={({ match }) => (
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
