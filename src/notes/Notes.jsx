import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {fullWhite} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import styles from './notes.css';
import journalStyle from '../journal/journal.css';

const Notes = ({currentNotes, updateJournalEntry}) => (
  <div className={styles.noteContainer}>
    <div>
      <p>Any other notes?</p>
      <TextField
        id="notes"
        multiLine={true}
        rows={2}
        rowsMax={4}
        onChange={(event) => {
          updateJournalEntry({notes: event.target.value});
        }}
        defaultValue={currentNotes}
      />
    </div>
    <div className={journalStyle.next}>
      <Link to="/journal/done">
        <FlatButton
          backgroundColor="#20B2AA"
          hoverColor="#00FA9A"
          icon={<ActionDone color={fullWhite} />}
          style={{margin: 12}}
        />
      </Link>
    </div>
  </div>
);

Notes.propTypes = {
  currentNotes: React.PropTypes.string,
  updateJournalEntry: React.PropTypes.func.isRequired
};

Notes.defaultProps = {
  currentNotes: ''
};

export default Notes;
