import React from 'react';
import PropTypes from 'prop-types';
import {toPairs} from 'lodash';
import moment from 'moment';
import MainCalendar from '../calendar/MainCalendarContainer';

import './pastEntries.css';

class PastEntries extends React.Component {

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
      <div className="calendar">
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
