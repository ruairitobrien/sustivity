import React, {PropTypes} from 'react';
import moment from 'moment';
import {toPairs} from 'lodash';
import styles from './pastEntries.css';
import MainCalendar from '../calendar/MainCalendarContainer';

class PastEntries extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllJournalEntries(this.props.user.uid);
  }

  render() {
    let events = toPairs(this.props.journalEntries).map((pair) => {
      let key = pair[0] || '';
      let value = pair[1] || {};
      let date = moment(key, 'MMM Do YYYY');
      return {title: value.title || key, allDay: true, start: date, end: date, desc: value.notes};
    });

    return (
      <div className={styles.calendar}>
        <MainCalendar events={events} />
      </div>
    );
  }
}

PastEntries.propTypes = {
  user: PropTypes.object.isRequired,
  journalEntries: PropTypes.object.isRequired,
  getAllJournalEntries: PropTypes.func.isRequired,
  deleteJournalEntry: PropTypes.func.isRequired
};

export default PastEntries;
