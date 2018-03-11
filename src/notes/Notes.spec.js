import React from 'react';
import {shallow} from 'enzyme';
import Notes from './Notes';

it('should render component', () => {
  const wrapper = shallow(<Notes
      currentnotes={'test'}
      title={'A title'}
      updateJournalEntry={() => {}}
    />);
  expect(wrapper).toBeTruthy();
});
