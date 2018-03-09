import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {fullWhite} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
import Numometer from '../numometer/Numometer';
import journalStyle from '../journal/journal.css';


const Stressometer = ({currentStressLevel, updateJournalEntry}) => (
  <div>
    <div className={journalStyle.question}>
      <h1>How stressed do you feel today?</h1>
    </div>
    <Numometer max={10} currentIndex={currentStressLevel} onChange={(index) => {
      updateJournalEntry({stressLevel: index});
    }}/>
    <div className={journalStyle.next}>
      <Link to="/journal/productivity">
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

Stressometer.propTypes = {
  currentStressLevel: PropTypes.number,
  updateJournalEntry: PropTypes.func.isRequired
};

Stressometer.defaultProps = {
  currentStressLevel: 1
};

export default Stressometer;
