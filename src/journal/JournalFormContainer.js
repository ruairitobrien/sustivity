import {connect} from "react-redux";
import {saveJournalEntry, updateJournalEntry, getAllJournalEntries} from "./journalActions";
import JournalForm from "./JournalForm";

const mapStateToProps = (state) => ({
  currentJournalEntry: state.currentJournalEntry,
  journalEntries: state.journalEntries,
  user: state.user
});

const mapDispatchToProps = ({
  saveJournalEntry: saveJournalEntry,
  updateJournalEntry: updateJournalEntry,
  getAllJournalEntries: getAllJournalEntries
});

const JournalFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalForm);

export default JournalFormContainer;
