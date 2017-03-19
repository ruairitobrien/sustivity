import React from 'react';

const JournalForm = ({children}) => (
  <div>
    {children}
  </div>
);

JournalForm.propTypes = {
  children: React.PropTypes.object
};

export default JournalForm;
