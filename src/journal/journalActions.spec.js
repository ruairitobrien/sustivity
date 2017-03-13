import {expect} from "chai";
import * as actions from "./journalActions";

describe('journalActions', () => {

  it('should create an action to update the current journal entry', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.UPDATE_CURRENT_JOURNAL_ENTRY,
      entry
    };
    expect(actions.updateCurrentJournalEntry(entry)).to.eql(expectedAction);
  });

  it('should create an action to add a journal entry', () => {
    const entry = {test: 'test'};
    const userId = 'user-id';
    const expectedAction = {
      type: actions.SAVE_JOURNAL_ENTRY,
      entry,
      userId
    };
    expect(actions.saveJournalEntry(entry, userId)).to.eql(expectedAction);
  });

  it('should create an action for add journal entry success', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.SAVE_JOURNAL_ENTRY_SUCCESS,
      entry
    };
    expect(actions.saveJournalEntrySuccess(entry)).to.eql(expectedAction);
  });

  it('should create an action for add journal entry failure', () => {
    const saveJournalEntryError = {message: 'failed'};
    const expectedAction = {
      type: actions.SAVE_JOURNAL_ENTRY_FAILURE,
      saveJournalEntryError
    };
    expect(actions.saveJournalEntryFailure(saveJournalEntryError)).to.eql(expectedAction);
  });

  it('should create an action to update a journal entry', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.UPDATE_JOURNAL_ENTRY,
      entry
    };
    expect(actions.updateJournalEntry(entry)).to.eql(expectedAction);
  });

  it('should create an action for update journal entry success', () => {
    const entry = {test: 'test'};
    const expectedAction = {
      type: actions.UPDATE_JOURNAL_ENTRY_SUCCESS,
      entry
    };
    expect(actions.updateJournalEntrySuccess(entry)).to.eql(expectedAction);
  });

  it('should create an action for update journal entry failure', () => {
    const updateJournalEntryError = {message: 'failed'};
    const expectedAction = {
      type: actions.UPDATE_JOURNAL_ENTRY_FAILURE,
      updateJournalEntryError
    };
    expect(actions.updateJournalEntryFailure(updateJournalEntryError)).to.eql(expectedAction);
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
      entries: {}
    };
    expect(actions.receiveAllJournalEntries({})).to.eql(expectedAction);
  });

});
