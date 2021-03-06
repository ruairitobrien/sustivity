import {connect} from 'react-redux';
import {updateJournalEntry} from '../journal/journalActions';
import Notes from './Notes';

const mapStateToProps = (state) => ({
  currentNotes: state.currentJournalEntry.notes,
  title: state.currentJournalEntry.title
});

const mapDispatchToProps = ({
  updateJournalEntry: updateJournalEntry
});

const NotesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);

export default NotesContainer;
