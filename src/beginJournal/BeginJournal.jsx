import React, {PropTypes} from 'react';

import styles from './beginJournal.css';
const nextRoute = '/journal/stress';

class BeginJournal extends React.Component {

  static propTypes = {
    currentJournalEntry: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    replace: PropTypes.func.isRequired
  };

  componentWillMount() {
    setTimeout(() => {
      this.props.replace(nextRoute);
    }, 1200);
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
