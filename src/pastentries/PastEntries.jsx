import React, {PropTypes} from 'react';
import {toPairs} from 'lodash';
import moment from 'moment';
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
      return Object.assign({}, value, {
        title: value.title || key,
        allDay: true,
        userId: this.props.user.uid,
        when: moment(key, 'MMM Do YYYY')
      });
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
  getAllJournalEntries: PropTypes.func.isRequired
};

export default PastEntries;
