export const SELECT_CALENDAR_ENTRY = 'SELECT_CALENDAR_ENTRY';
export const DESELECT_CALENDAR_ENTRY = 'DESELECT_CALENDAR_ENTRY';

export const selectCalendarEntry = (event, e) => ({
  type: SELECT_CALENDAR_ENTRY,
  calenderSelection: {
    selected: true,
    anchorEl: e.currentTarget
  }
});

export const deSelectCalendarEntry = () => ({
  type: SELECT_CALENDAR_ENTRY,
  calenderSelection: {
    selected: false,
    anchorEl: null
  }
});
