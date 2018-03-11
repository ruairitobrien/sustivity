import React from 'react';
import {shallow} from 'enzyme';
import Event from './Event';

it('should render component', () => {
  const wrapper = shallow(<Event
    event={{}}
    calenderSelection={{}}
    replace={() => {}}
    deSelectCalendarEntry={() => {}}
    deleteJournalEntry={() => {}}
  />);
  expect(wrapper).toBeTruthy();
});
