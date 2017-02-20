import undoable from 'redux-undo';

const ADD_JOURNAL_ENTRY = 'ADD_JOURNAL_ENTRY';
const UPDATE_JOURNAL_ENTRY = 'UPDATE_JOURNAL_ENTRY';

const journalEntry = (state, action) => {
  switch (action.type) {
    case ADD_JOURNAL_ENTRY:
      return {};
    case UPDATE_JOURNAL_ENTRY:
      if (state.id !== action.id) {
        return state
      }
      return action.journalEntry;
    default:
      return state
  }
};

const journalEntries = (state = [], action) => {
  switch (action.type) {
    case ADD_JOURNAL_ENTRY:
      return [
        ...state,
        journalEntry(undefined, action)
      ];
    case UPDATE_JOURNAL_ENTRY:
      return state.map(t =>
        journalEntry(t, action)
      );
    default:
      return state
  }
};

const undoableJournals = undoable(journalEntries);

export default undoableJournals;
