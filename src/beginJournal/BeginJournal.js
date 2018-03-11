import React from 'react';
import PropTypes from 'prop-types';
import initialState from '../initialState';

import './beginJournal.css';
const nextRoute = '/journal/stress';

class BeginJournal extends React.Component {

  static propTypes = {
    match: PropTypes.object,
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
    let entry = initialState.currentJournalEntry;
    if(this.props.match.entryId) {
      entry = this.props.journalEntries[this.props.match.entryId];
    }
    this.props.setCurrentJournalEntry(entry || initialState.currentJournalEntry);
  }

  render() {
    let {displayName} = this.props.user;
    return (
      <div className="welcomePage">
          <h1 className="welcomeMessage">Hello{displayName ? ' ' + displayName:''}!</h1>
      </div>
    );
  }
}

export default BeginJournal;
