import {calenderSelection} from './calendarReducers';
import {
  SELECT_CALENDAR_ENTRY,
  DESELECT_CALENDAR_ENTRY
} from './calendarActions';

describe('calenderSelection', () => {

  it('should return the initial state by default', () => {
    expect(calenderSelection(undefined, {})).toEqual({});
  });

  it('should handle SELECT_CALENDAR_ENTRY', () => {
    const state = {
      selected: true,
      anchorEl: {}
    };
    const action = {
      type: SELECT_CALENDAR_ENTRY,
      calenderSelection: state
    };
    expect(calenderSelection({}, action)).toEqual(state);
  });

  it('should handle DESELECT_CALENDAR_ENTRY', () => {
    const state = {
      selected: false,
      anchorEl: null
    };
    const action = {
      type: DESELECT_CALENDAR_ENTRY,
      calenderSelection: state
    };
    expect(calenderSelection({}, action)).toEqual(state);
  });

});
