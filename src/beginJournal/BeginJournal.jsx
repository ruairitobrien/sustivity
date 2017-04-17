import React, {PropTypes} from 'react';
import {currentJournalEntry} from '../initialState';

import styles from './beginJournal.css';
const nextRoute = '/journal/stress';

class BeginJournal extends React.Component {

  static propTypes = {
    currentJournalEntry: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    journalEntries: PropTypes.object.isRequired,
    replace: PropTypes.func.isRequired,
    setCurrentJournalEntry: PropTypes.func.isRequired
  };

  componentWillMount() {
    setTimeout(() => {
      this.props.replace(nextRoute);
    }, 1000);
    let entry = currentJournalEntry;
    if(this.props.params.entryId) {
      entry = this.props.journalEntries[this.props.params.entryId];
    }
    this.props.setCurrentJournalEntry(entry || currentJournalEntry);
  }

  render() {
    let {displayName} = this.props.user;
    return (
      <div className={styles.welcomePage}>
          <h1 className={styles.welcomeMessage}>Hello{displayName ? ' ' + displayName:''}!</h1>
      </div>
    );
  }
}

export default BeginJournal;
