import React from 'react';
import moment from 'moment';
import { Modal } from 'react-bootstrap';
import { monthsByIndex } from '../constants/months';

const padWithZeros = (width, num) => {
  const bareNumStr = `${num}`;
  let result = bareNumStr;
  for (let i = 0; i < width - bareNumStr.length; i++) {
    result = `0${result}`;
  }
  return result;
};

window.padWithZeros = padWithZeros;

const formatTime = ({ hour, minute }) => {
  const halfDayHour = hour % 12 || 12;
  const hourStr = `${halfDayHour}`;
  const minuteStr = padWithZeros(2, minute);
  const amPm = hour >= 12 ? 'PM' : 'AM';
  return `${hourStr}:${minuteStr} ${amPm}`;
};

const formatTimeForInput = ({ hour, minute }) => {
  const hourStr = padWithZeros(2, hour);
  const minuteStr = padWithZeros(2, minute);
  return `${hourStr}:${minuteStr}`;
};

const formatDate = (year, month, day) => {
  const monthNumber = monthsByIndex.indexOf(month) + 1;
  const yearStr = padWithZeros(4, year);
  const monthStr = padWithZeros(2, monthNumber);
  const dayStr = padWithZeros(2, day);
  return `${yearStr}-${monthStr}-${dayStr}`;
};

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: props.event.title,
      month: props.event.date.month,
      year: props.event.date.year,
      day: props.event.date.day,
      location: props.event.location,
      startTime: props.event.startTime,
      endTime: props.event.endTime,
    };

    this.makeSetter = this.makeSetter.bind(this);
    this.makeTimeSetter = this.makeTimeSetter.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  makeSetter(fieldName) {
    return (e) => {
      this.setState({ [fieldName]: e.target.value });
    };
  }

  makeTimeSetter(fieldName) {
    return (e) => {
      const [hourStr, minuteStr] = e.target.value.split(':');
      const hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      this.setState({
        [fieldName]: {
          hour,
          minute,
        },
      });
    };
  }

  setDate(e) {
    const dateStr = e.target.value;
    const [yearStr, monthStr, dayStr] = dateStr.split('-');
    console.log(yearStr, monthStr, dayStr);
    this.setState({
      year: parseInt(yearStr, 10),
      month: monthsByIndex[parseInt(monthStr, 10) - 1],
      day: parseInt(dayStr, 10),
    });
  }

  render() {
    const {
      close,
      remove,
      event: {
        title,
        date,
        location,
        startTime,
        endTime,
        type,
      },
    } = this.props;
    const { isEditing } = this.state;
    if (!isEditing) {
      return (
        <Modal show onHide={close}>
          <Modal.Header>
            <Modal.Title>{title} ({type})</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{date.month} {date.day}, {date.year}</div>
            <div>location: {location}</div>
            <div>start: {formatTime(startTime)}</div>
            <div>end: {formatTime(endTime)}</div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => this.setState({ isEditing: true })}>Edit</button>
            <button onClick={close}>Close</button>
            <button onClick={remove}>Remove</button>
          </Modal.Footer>
        </Modal>
      );
    }
    return (
      <Modal show onHide={close}>
        <Modal.Header>
          <Modal.Title><input value={this.state.title} onChange={this.makeSetter('title')}/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            date:
            <input
              type="date"
              value={formatDate(this.state.year, this.state.month, this.state.day)}
              onChange={this.setDate}
            />
          </div>
          <div>location: <input value={this.state.location} onChange={this.makeSetter('location')}/></div>
          <div>start: <input type="time" value={formatTimeForInput(this.state.startTime)} onChange={this.makeTimeSetter('startTime')}/></div>
          <div>end: <input type="time" value={formatTimeForInput(this.state.endTime)} onChange={this.makeTimeSetter('endTime')}/></div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => this.setState({ isEditing: false })}>Save</button>
          <button onClick={close}>Close</button>
          <button onClick={remove}>Remove</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EventModal;
