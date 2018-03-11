import {currentJournalEntry, currentJournalEntrySaveState} from './JournalReducers';
import {
  SET_CURRENT_JOURNAL_ENTRY,
  UPDATE_JOURNAL_ENTRY,
  SAVE_JOURNAL_ENTRY,
  SAVE_JOURNAL_ENTRY_SUCCESS,
  SAVE_JOURNAL_ENTRY_FAILURE
} from './journalActions';

describe('currentJournalEntry', () => {

  it('should return the initial state by default', () => {
    expect(currentJournalEntry(undefined, {})).toEqual({});
  });

  it('should handle SAVE_JOURNAL_ENTRY', () => {
    const entry = {
      text: 'goodBye',
      id: 'test-id'
    };
    expect(currentJournalEntry({id: 'test-id', text: 'hello'}, {
      type: SAVE_JOURNAL_ENTRY,
      entry: entry
    })).toEqual(entry);
  });

  it('should handle UPDATE_JOURNAL_ENTRY', () => {
    const entry = {
      text: 'goodBye',
      id: 'test-id'
    };
    expect(currentJournalEntry({id: 'test-id', text: 'hello'},{type: UPDATE_JOURNAL_ENTRY,entry: entry})).toEqual(entry);
  });

  it('should handle SET_CURRENT_JOURNAL_ENTRY', () => {
    const entry = {
      text: 'goodBye',
      id: 'test-id'
    };
    expect(currentJournalEntry({id: 'test-id', text: 'hello'}, {
      type: SET_CURRENT_JOURNAL_ENTRY,
      entry: entry
    })).toEqual(entry);
  });

});

describe('currentJournalEntrySaveState', () => {

  it('should handle SAVE_JOURNAL_ENTRY', () => {
    expect(currentJournalEntrySaveState({}, {
      type: SAVE_JOURNAL_ENTRY
    })).toEqual({saving: true, err: null, succeeded: false});
  });

  it('should handle SAVE_JOURNAL_ENTRY_SUCCESS', () => {
    expect(currentJournalEntrySaveState({}, {type: SAVE_JOURNAL_ENTRY_SUCCESS})).toEqual({saving: false, err: null, succeeded: true});
  });

  it('should handle SAVE_JOURNAL_ENTRY_FAILURE', () => {
    expect(currentJournalEntrySaveState({}, {
      type: SAVE_JOURNAL_ENTRY_FAILURE,
      saveJournalEntryError: {message: 'error happened'}
    })).toEqual({
      saving: false,
      err: {message: 'error happened'},
      succeeded: false
    });
  });

});
