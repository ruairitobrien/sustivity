import React from 'react';
import Numometer from '../numometer/Numometer';

const Stressometer = ({currentStressLevel, updateJournalEntry}) => (
  <div>
    <p>How stressed do you feel today?</p>
    <Numometer max={10} currentIndex={currentStressLevel} onChange={(index) => {
      updateJournalEntry({stressLevel: index});
    }}/>
 </div>
);

Stressometer.propTypes = {
  currentStressLevel: React.PropTypes.number,
  updateJournalEntry: React.PropTypes.func.isRequired
};

export default Stressometer;
