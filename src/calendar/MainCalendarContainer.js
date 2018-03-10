import {connect} from 'react-redux';
import MainCalendar from './MainCalendar';
import {selectCalendarEntry} from './calendarActions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = ({
  selectCalendarEntry
});

const MainCalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCalendar);

export default MainCalendarContainer;
