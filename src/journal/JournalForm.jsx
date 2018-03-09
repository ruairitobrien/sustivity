import React from 'react';
import PropTypes from 'prop-types';

const JournalForm = ({children}) => (
  <div>
    {children}
  </div>
);

JournalForm.propTypes = {
  children: PropTypes.object
};

export default JournalForm;
