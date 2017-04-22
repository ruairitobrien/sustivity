import test from 'ava';
import * as actions from './calendarActions';

test('selectCalendarEntry should create an action to select a calendar entry', t => {
  const target = {id: 'a-target'};
  const expectedAction = {
    type: actions.SELECT_CALENDAR_ENTRY,
    calenderSelection: {
      selected: true,
      anchorEl: target
    }
  };

  t.deepEqual(actions.selectCalendarEntry(null, {currentTarget: target}), expectedAction);
});

test('deSelectCalendarEntry should create an action to deselect a calendar entry', t => {
  const expectedAction = {
    type: actions.DESELECT_CALENDAR_ENTRY,
    calenderSelection: {
      selected: false,
      anchorEl: null
    }
  };

  t.deepEqual(actions.deSelectCalendarEntry(), expectedAction);
});
