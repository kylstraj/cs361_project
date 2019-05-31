import React from 'react';

const formatTime = ({ hour, minute }) => `${hour}:${minute}`;

const EventModal = ({ close, remove, event: { title, date, location, startTime, endTime }}) => (
  <div
    style={{
      position: 'absolute',
      top: '50px',
      left: '50px',
      width: '80%',
      border: 'solid 1px black',
      zIndex: '1000',
    }}
  >
    <h3>{title}</h3>
    <div>{date.month} {date.day}, {date.year}</div>
    <div>location: {location}</div>
    <div>start: {formatTime(startTime)}</div>
    <div>end: {formatTime(endTime)}</div>
    <button onClick={close}>Close</button>
    <button onClick={remove}>Remove</button>
  </div>
);

export default EventModal;
