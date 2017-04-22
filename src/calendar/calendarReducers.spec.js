import test from 'ava';
import {calenderSelection} from './calendarReducers';
import {
  SELECT_CALENDAR_ENTRY
} from './calendarActions';

test('calenderSelection should return the initial state by default', t => {
  t.deepEqual(calenderSelection(undefined, {}), {});
});
