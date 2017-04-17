import React, {PropTypes} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {toPairs} from 'lodash';
import styles from './pastEntries.css';

BigCalendar.momentLocalizer(moment);

class PastEntries extends React.Component {

  componentWillMount() {
    this.props.getAllJournalEntries(this.props.user.uid);
  }

  render() {
    let events = toPairs(this.props.journalEntries).map((pair) => {
      let key = pair[0];
      let value = pair[1];
      let date = moment(key, 'MMM Do YYYY');
      return {title: 'Test', allDay: true, start: date, end: date, desc: value.notes};
    });

    return (
      <div className={styles.calendar}>
        <BigCalendar
          events={events}
          defaultDate={new Date()}
          views={['month']}
          popup={true}
          startAccessor='start'
          endAccessor='end'
        />
      </div>
    );
  }
}

PastEntries.propTypes = {
  user: PropTypes.object.isRequired,
  journalEntries: PropTypes.object.isRequired,
  getAllJournalEntries: PropTypes.func.isRequired
};

export default PastEntries;
