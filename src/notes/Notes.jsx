import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {fullWhite} from 'material-ui/styles/colors';
import {Link} from 'react-router';
import styles from './notes.css';
import journalStyle from '../journal/journal.css';

const Notes = ({currentNotes, title, updateJournalEntry}) => (
  <div className={styles.noteContainer}>
    <div>
      <div className={journalStyle.question}>
        <h1>Any other notes?</h1>
      </div>
      <div>
        <TextField
          id="title"
          onChange={(event) => {
            updateJournalEntry({title: event.target.value});
          }}
          defaultValue={title}
          hintText={'Title (If today had a name)'}
          autoFocus
        />
      </div>
      <div>
        <TextField
          id="notes"
          multiLine={true}
          rows={2}
          rowsMax={4}
          onChange={(event) => {
            updateJournalEntry({notes: event.target.value});
          }}
          defaultValue={currentNotes}
          hintText={'Notes'}
        />
      </div>
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
