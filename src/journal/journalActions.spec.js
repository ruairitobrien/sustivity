import {expect} from "chai";
import * as actions from "./journalActions";

describe('journalActions', () => {

  it('should create an action to add a journal entry', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.ADD_JOURNAL_ENTRY,
      entry
    };
    expect(actions.addJournalEntry(entry)).to.eql(expectedAction);
  });

  it('should create an action to update a journal entry', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.UPDATE_JOURNAL_ENTRY,
      entry
    };
    expect(actions.updateJournalEntry(entry)).to.eql(expectedAction);
  });

  it('should create an action for getting all journal entries', () => {
    const expectedAction = {
      type: actions.GET_ALL_JOURNAL_ENTRIES,
      userId: 'user-id'
    };
    expect(actions.getAllJournalEntries('user-id')).to.eql(expectedAction);
  });

  it('should create an action for receiving all journal entries', () => {
    const expectedAction = {
      type: actions.RECEIVE_ALL_JOURNAL_ENTRIES,
      entries: []
    };
    expect(actions.receiveAllJournalEntries([])).to.eql(expectedAction);
  });

});
