import {ADD_JOURNAL_ENTRY, UPDATE_JOURNAL_ENTRY} from "./journalActions";

export const currentJournalEntry = (state = {}, action) => {
  switch (action.type) {
    case ADD_JOURNAL_ENTRY:
      return Object.assign({}, action.entry);
    case UPDATE_JOURNAL_ENTRY:
      if (state.id !== action.entry.id) {
        return state
      }
      return Object.assign({}, state, action.entry);
    default:
      return state
  }
};

export const journalEntries = (state = {}, action) => {
  switch (action.type) {
    case ADD_JOURNAL_ENTRY:
      let entry = currentJournalEntry(undefined, action);
      if (state.indexOf(entry) === -1) {
        return state;
      }
      return [
        ...state,
        entry
      ];
    case UPDATE_JOURNAL_ENTRY:
      return state.map(t =>
        currentJournalEntry(t, action)
      );
    default:
      return state
  }
};
