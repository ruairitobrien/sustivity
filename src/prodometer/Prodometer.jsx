import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import {fullWhite} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom';
import Numometer from '../numometer/Numometer';
import journalStyle from '../journal/journal.css';

const Prodometer = ({currentProductivityLevel, updateJournalEntry}) => (
  <div>
    <div className={journalStyle.question}>
      <h1>How productive do you feel today?</h1>
    </div>
    <Numometer max={10} currentIndex={currentProductivityLevel} onChange={(index) => {
      updateJournalEntry({productivityLevel: index});
    }}/>
    <div className={journalStyle.next}>
      <Link to="/journal/work">
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

Prodometer.propTypes = {
  currentProductivityLevel: PropTypes.number,
  updateJournalEntry: PropTypes.func.isRequired
};

export default Prodometer;
