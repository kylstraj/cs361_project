import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from './eventsConstants';

const initialState = {
  events: {},
};

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
        events: Object.keys(state.events).reduce((newEvents, id) => (id === action.eventId ?
          newEvents :
          {
            ...newEvents,
            [id]: state.events[id],
          })),
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
    default:
      return state;
  }
};

export default eventsReducer;
