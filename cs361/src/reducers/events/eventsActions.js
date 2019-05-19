import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from './eventsConstants';

export const addEvent = event => ({
  type: ADD_EVENT,
  event,
});

export const removeEvent = eventId => ({
  type: REMOVE_EVENT,
  eventId,
});

export const updateVent = (eventId, update) => ({
  type: UPDATE_EVENT,
  eventId,
  update,
});
