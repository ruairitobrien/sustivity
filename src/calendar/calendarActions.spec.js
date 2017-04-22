import test from 'ava';
import * as actions from './calendarActions';

test('', t => {
  const expectedAction = {
    type: actions.SELECT_CALENDAR_ENTRY
  };

  t.deepEqual(actions.selectCalendarEntry(), expectedAction);
});
