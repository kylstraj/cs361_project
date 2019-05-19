import { combineReducers } from 'redux';

import eventsReducer from './events/eventsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
