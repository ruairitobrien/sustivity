import {connect} from "react-redux";
import {addJournalEntry, updateJournalEntry, getAllJournalEntries} from "./journalActions";
import JournalForm from "./JournalForm";

const mapStateToProps = (state) => ({
  currentJournalEntry: state.currentJournalEntry,
  journalEntries: state.journalEntries
});

const mapDispatchToProps = ({
  addJournalEntry: addJournalEntry,
  updateJournalEntry: updateJournalEntry,
  getAllJournalEntries: getAllJournalEntries
});

const JournalFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JournalForm);

export default JournalFormContainer;
