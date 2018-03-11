import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {deSelectCalendarEntry} from './calendarActions';
import {deleteJournalEntry} from '../journal/journalActions';
import Event from './Event';

const mapStateToProps = state => ({
  calenderSelection: state.calenderSelection
});

const mapDispatchToProps = ({
  replace: routerActions.replace,
  deSelectCalendarEntry,
  deleteJournalEntry
});

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);

export default EventContainer;
