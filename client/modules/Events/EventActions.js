import callApi from "../../util/apiCaller";

export const LIST_EVENTS = 'list_events';

export function listEvents(events) {
  return {
    type: LIST_EVENTS,
    events
  }
}

export function fetchEvents() {
  return (dispatch) => {
    return callApi('getEvents').then(res => {
      dispatch(listEvents(res.events));
    });
  };
}
