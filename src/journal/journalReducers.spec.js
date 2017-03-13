import {expect} from "chai";
import {currentJournalEntry} from "./journalReducers";
import {UPDATE_JOURNAL_ENTRY, SAVE_JOURNAL_ENTRY} from "./journalActions";

describe('journalReducers: ', () => {

  describe('currentJournalEntry reducer', () => {

    it('should return the initial state by default', () => {
      expect(
        currentJournalEntry(undefined, {})
      ).to.eql({})
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
  });
});
