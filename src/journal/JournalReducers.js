import {ADD_JOURNAL_ENTRY, UPDATE_JOURNAL_ENTRY} from "./journalActions";

export const currentJournalEntry = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_JOURNAL_ENTRY:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        text: action.text
      });
    default:
      return state
  }
};

export const journalEntries = (state = [], action) => {
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
