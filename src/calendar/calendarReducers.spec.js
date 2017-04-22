import test from 'ava';
import {calenderSelection} from './calendarReducers';
import {
  SELECT_CALENDAR_ENTRY,
  DESELECT_CALENDAR_ENTRY
} from './calendarActions';

test('calenderSelection should return the initial state by default', t => {
  t.deepEqual(calenderSelection(undefined, {}), {});
});

test('calenderSelection should handle SELECT_CALENDAR_ENTRY', t => {
  const state = {
    selected: true,
    anchorEl: {}
  };
  const action = {
    type: SELECT_CALENDAR_ENTRY,
    calenderSelection: state
  };
  t.deepEqual(calenderSelection({}, action), state);
});

test('calenderSelection should handle DESELECT_CALENDAR_ENTRY', t => {
  const state = {
    selected: false,
    anchorEl: null
  };
  const action = {
    type: DESELECT_CALENDAR_ENTRY,
    calenderSelection: state
  };
  t.deepEqual(calenderSelection({}, action), state);
});
