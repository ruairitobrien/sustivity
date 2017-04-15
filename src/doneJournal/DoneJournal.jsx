import React, {PropTypes} from 'react';

import styles from './doneJournal.css';
const nextRoute = '/';

class DoneJournal extends React.Component {

  static propTypes = {
    currentJournalEntry: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    replace: PropTypes.func.isRequired
  };

  componentWillMount() {
    setTimeout(() => {
      this.props.replace(nextRoute);
    }, 1500);
  }

  render() {
    let {displayName} = this.props.user;
    return (
      <div className={styles.welcomePage}>
          <h1 className={styles.welcomeMessage}>Thank you {displayName ? ' ' + displayName:''}!</h1>
      </div>
    );
  }
}

export default DoneJournal;
