import React from 'react';
import {shallow} from 'enzyme';
import DoneJournal from './DoneJournal';

it('should render component', () => {
  let user = {};
  const wrapper = shallow(<DoneJournal
      user={user}
      replace={() => {}}
      currentJournalEntry={{}}
      saveState={{}}
      saveJournalEntry={() => {}}
    />);

  expect(wrapper).toBeTruthy();
});
