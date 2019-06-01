import {
  ADD_EVENT,
  REMOVE_EVENT,
  UPDATE_EVENT,
  SET_DISPLAYED_EVENT,
} from './eventsConstants';

const initialState = {
  events: {},
  displayedEvent: null,
};

const coalesceEvents = (eventArr) => eventArr.reduce((eventObj, event) => ({
  ...eventObj,
  [event.id]: event,
}), {});

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: {
          ...state.events,
          [action.event.id]: action.event,
        },
      };
    case REMOVE_EVENT:
      return {
        ...state,
        events: coalesceEvents(Object.values(state.events).filter(event => event.id !== action.eventId)),
      };
    case UPDATE_EVENT:
      return {
        ...state,
        events: {
          ...state.events,
          [action.eventId]: {
            ...state.events[action.eventId],
            ...action.update,
          },
        },
      };
    case SET_DISPLAYED_EVENT:
      return {
        ...state,
        displayedEvent: action.displayedEvent,
      };
    default:
      return state;
  }
};

export default eventsReducer;
