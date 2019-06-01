import React from 'react';

const formatTime = ({ hour, minute, AMPM }) => `${hour}:${minute} ${AMPM}`;

const EventModal = ({ close, remove, event: { title, date, location, startTime, endTime }}) => (
  <div className="modal"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      border: 'solid 1px black',
      backgroundColor: 'white',
      zIndex: '1000',
    }}
  >
    <h3>{title}</h3>
    <div>{date.month} {date.day}, {date.year}</div>
    <div>Location: {location}</div>
    <div>Start: {formatTime(startTime)}</div>
    <div>End: {formatTime(endTime)}</div>
    <button id="closeBtn" onClick={close}>Close</button>
    <button id="removeBtn" onClick={remove}>Remove</button>
  </div>
);

export default EventModal;
