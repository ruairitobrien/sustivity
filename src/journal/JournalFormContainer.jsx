import {connect} from 'react-redux';
import {addJournalEntry, updateJournalEntry} from './journalActions';
import JournalForm from './JournalForm';

const mapStateToProps = (state) => ({
  journalEntries: state.journalEntries
});

const mapDispatchToProps = ({
  addJournalEntry: addJournalEntry,
  updateJournalEntry: updateJournalEntry
});

const JournalFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalForm);

export default JournalFormContainer
