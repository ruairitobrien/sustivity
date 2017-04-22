import {
  SELECT_CALENDAR_ENTRY,
  DESELECT_CALENDAR_ENTRY
} from './calendarActions';

export const calenderSelection = (state = {}, action) => {
  switch (action.type) {
  case SELECT_CALENDAR_ENTRY:
    return Object.assign({}, state, action.calenderSelection);
  case DESELECT_CALENDAR_ENTRY:
    return Object.assign({}, state, action.calenderSelection);
  default:
    return state;
  }
};
