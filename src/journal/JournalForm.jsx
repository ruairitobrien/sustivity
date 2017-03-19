import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import WorkProportion from '../workProportion/WorkProportionContainer';
import Stressometer from '../stressometer/StressometerContainer';
import Prodometer from '../prodometer/ProdometerContainer';
import Notes from '../notes/NotesContainer';

class JournalForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSaveJournalEntry = (event) => {
    event.preventDefault();
    this.props.saveJournalEntry(this.props.currentJournalEntry, this.props.user.uid);
  };

  render() {
    return (
      <div>
        <Prodometer />

        <Stressometer />

        <WorkProportion />

        <Notes />

        <div>
          <RaisedButton label="Save" onClick={this.handleSaveJournalEntry}/>
        </div>

      </div>
    );
  }
}

JournalForm.propTypes = {
  user: PropTypes.object.isRequired,
  currentJournalEntry: PropTypes.object.isRequired,
  saveJournalEntry: PropTypes.func.isRequired
};

export default JournalForm;
