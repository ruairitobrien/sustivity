import {connect} from 'react-redux';
import {saveJournalEntry} from './journalActions';
import JournalForm from './JournalForm';

const mapStateToProps = (state) => ({
  currentJournalEntry: state.currentJournalEntry,
  user: state.user
});

const mapDispatchToProps = ({
  saveJournalEntry: saveJournalEntry
});

const JournalFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalForm);

export default JournalFormContainer;
