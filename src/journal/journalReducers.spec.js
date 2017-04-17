import {expect} from 'chai';
import {currentJournalEntry, currentJournalEntrySaveState} from './journalReducers';
import {
  SET_CURRENT_JOURNAL_ENTRY,
  UPDATE_JOURNAL_ENTRY,
  SAVE_JOURNAL_ENTRY,
  SAVE_JOURNAL_ENTRY_SUCCESS,
  SAVE_JOURNAL_ENTRY_FAILURE
} from './journalActions';

describe('journalReducers: ', () => {

  describe('currentJournalEntry reducer', () => {

    it('should return the initial state by default', () => {
      expect(
        currentJournalEntry(undefined, {})
      ).to.eql({});
    });

    it('should handle SAVE_JOURNAL_ENTRY', () => {
      const entry = {
        text: 'goodBye',
        id: 'test-id'
      };
      expect(currentJournalEntry({id: 'test-id', text: 'hello'}, {
        type: SAVE_JOURNAL_ENTRY,
        entry: entry
      })).to.eql(entry);
    });

    it('should handle UPDATE_JOURNAL_ENTRY', () => {
      expect(
        currentJournalEntry({id: 'test-id', text: 'hello'}, {
          type: UPDATE_JOURNAL_ENTRY,
          entry: {
            text: 'goodBye',
            id: 'test-id'
          }
        })).to.eql(
        {
          text: 'goodBye',
          id: 'test-id'
        }
      );
    });

    it('should handle SET_CURRENT_JOURNAL_ENTRY', () => {
      const entry = {
        text: 'goodBye',
        id: 'test-id'
      };
      expect(currentJournalEntry({id: 'test-id', text: 'hello'}, {
        type: SET_CURRENT_JOURNAL_ENTRY,
        entry: entry
      })).to.eql(entry);
    });
  });

  describe('currentJournalEntrySaveState reducer', () => {
    it('should handle SAVE_JOURNAL_ENTRY', () => {
      expect(
        currentJournalEntrySaveState({}, {
          type: SAVE_JOURNAL_ENTRY
        })).to.eql({saving: true, err: null, succeeded: false});
    });

    it('should handle SAVE_JOURNAL_ENTRY_SUCCESS', () => {
      expect(
        currentJournalEntrySaveState({}, {
          type: SAVE_JOURNAL_ENTRY_SUCCESS
        })).to.eql({saving: false, err: null, succeeded: true});
    });

    it('should handle SAVE_JOURNAL_ENTRY_FAILURE', () => {
      expect(
        currentJournalEntrySaveState({}, {
          type: SAVE_JOURNAL_ENTRY_FAILURE,
          saveJournalEntryError: {message: 'error happened'}
        })).to.eql({
          saving: false,
          err: {message: 'error happened'},
          succeeded: false
        });
    });
  });
});
