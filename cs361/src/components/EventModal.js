import React from 'react';
import { Modal } from 'react-bootstrap';

const formatTime = ({ hour, minute }) => `${hour}:${minute}`;

const EventModal = ({ close, remove, event: { title, date, location, startTime, endTime }}) => (
  <Modal show>
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>{date.month} {date.day}, {date.year}</div>
      <div>location: {location}</div>
      <div>start: {formatTime(startTime)}</div>
      <div>end: {formatTime(endTime)}</div>
    </Modal.Body>
    <Modal.Footer>
      <button onClick={close}>Close</button>
      <button onClick={remove}>Remove</button>
    </Modal.Footer>
  </Modal>
);

export default EventModal;
