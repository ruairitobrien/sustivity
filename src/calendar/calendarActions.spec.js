import * as actions from './calendarActions';

it('selectCalendarEntry should create an action to select a calendar entry', () => {
  const target = {id: 'a-target'};
  const expectedAction = {
    type: actions.SELECT_CALENDAR_ENTRY,
    calenderSelection: {
      selected: true,
      anchorEl: target
    }
  };

  expect(actions.selectCalendarEntry(null, {currentTarget: target})).toEqual(expectedAction);
});

it('deSelectCalendarEntry should create an action to deselect a calendar entry', () => {
  const expectedAction = {
    type: actions.DESELECT_CALENDAR_ENTRY,
    calenderSelection: {
      selected: false,
      anchorEl: null
    }
  };

  expect(actions.deSelectCalendarEntry()).toEqual(expectedAction);
});
