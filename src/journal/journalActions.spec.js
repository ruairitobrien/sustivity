import {expect} from 'chai';
import * as actions from './journalActions';

describe('journalActions', () => {

  it('should create an action to add a journal entry', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.ADD_JOURNAL_ENTRY,
      entry
    }
    expect(actions.addJournalEntry(entry)).to.deep.equal(expectedAction)
  });

  it('should not create an action to add a journal entry when action type is wrong', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.UPDATE_JOURNAL_ENTRY,
      entry
    }
    expect(actions.addJournalEntry(entry)).not.to.deep.equal(expectedAction)
  });

  it('should create an action to update a journal entry', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.UPDATE_JOURNAL_ENTRY,
      entry
    }
    expect(actions.updateJournalEntry(entry)).to.deep.equal(expectedAction)
  });

  it('should not create an action to update a journal entry when action type is wrong', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.ADD_JOURNAL_ENTRY,
      entry
    }
    expect(actions.updateJournalEntry(entry)).not.to.deep.equal(expectedAction)
  });

});
