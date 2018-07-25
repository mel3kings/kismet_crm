import {LIST_EVENTS} from './EventActions';

const initialState = {data: []};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_EVENTS:
      return {
        data: action.events
      };
    default:
      return state;
  }
};

export default EventReducer;
