import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './doneJournal.css';
const nextRoute = '/';

const buttonStyle = {
  margin: 12,
};

class DoneJournal extends React.Component {

  static propTypes = {
    currentJournalEntry: PropTypes.object.isRequired,
    saveState: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    replace: PropTypes.func.isRequired,
    saveJournalEntry: PropTypes.func.isRequired
  };

  componentWillMount() {
    let {saving, err, succeeded} = this.props.saveState;
    if (!saving && !err && !succeeded) {
      this.saveJournalEntry();
    }
  }

  componentWillUpdate(nextProps) {
    let {succeeded} = nextProps.saveState;
    if (succeeded) {
      setTimeout(() => {
        this.props.replace(nextRoute);
      }, 1000);
    }
  }

  saveJournalEntry() {
    let {saveJournalEntry, currentJournalEntry} = this.props;
    let {uid} = this.props.user;
    saveJournalEntry(currentJournalEntry, uid);
  }

  render() {
    let {displayName} = this.props.user;
    let {saving, err} = this.props.saveState;
    let message = <h1 className={styles.mainMessage}>Thank you {displayName ? ' ' + displayName:''}!</h1>;
    if(err) {
      message = (
        <div>
          <h1 className={styles.mainMessage}>There was a problem trying to save your journal entry.</h1>
          <div>
            <RaisedButton label="Retry" primary={true} onClick={this.saveJournalEntry} style={buttonStyle}/>
            <RaisedButton label="Cancel" secondary={true} onClick={() => this.props.replace(nextRoute)} style={buttonStyle} />
          </div>
        </div>
      );
    } else if (saving) {
      message = <h1 className={styles.mainMessage}>Saving</h1>;
    }

    return (
      <div className={styles.donePage}>
          {message}
      </div>
    );
  }
}

export default DoneJournal;
