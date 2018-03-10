import React from 'react';
import ReactDOM from 'react-dom';
import WorkProportion from './WorkProportion';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WorkProportion currentWorkProportions={{}} updateJournalEntry={() => {}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
