import {connect} from 'react-redux';
import {routerActions} from 'react-router-redux';
import {deSelectCalendarEntry} from './calendarActions';
import Event from './Event.jsx';

const mapStateToProps = state => ({
  calenderSelection: state.calenderSelection
});

const mapDispatchToProps = ({
  replace: routerActions.replace,
  deSelectCalendarEntry
});

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);

export default EventContainer;
