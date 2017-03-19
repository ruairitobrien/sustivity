import React from 'react';
import Numometer from '../numometer/Numometer';

const Prodometer = ({currentProductivityLevel, updateJournalEntry}) => (
  <div>
    <p>How productive do you feel today?</p>
    <Numometer max={10} currentIndex={currentProductivityLevel} onChange={(index) => {
      updateJournalEntry({productivityLevel: index});
    }}/>
 </div>
);

Prodometer.propTypes = {
  currentProductivityLevel: React.PropTypes.number,
  updateJournalEntry: React.PropTypes.func.isRequired
};

export default Prodometer;
