import {expect} from 'chai';
import {currentJournalEntry, journalEntries} from './journalReducers';
import {ADD_JOURNAL_ENTRY, UPDATE_JOURNAL_ENTRY} from './journalActions';

describe('currentJournalEntry reducer', () => {

  it('should return the initial state', () => {
    expect(
      currentJournalEntry(undefined, {})
    ).to.deep.equal({})
  });

  it('should handle UPDATE_JOURNAL_ENTRY', () => {
    expect(
      currentJournalEntry({id: 'test-id', text: 'hello'}, {
        type: UPDATE_JOURNAL_ENTRY,
        text: 'goodBye',
        id: 'test-id'
      })).to.deep.equal(
        {
          text: 'goodBye',
          id: 'test-id'
        }
      );
  });
});
