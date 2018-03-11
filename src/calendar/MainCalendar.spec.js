import React from 'react';
import {shallow} from 'enzyme';
import MainCalendar from './MainCalendar';

it('should render component', () => {
  const wrapper = shallow(<MainCalendar
    events={[]}
    selectCalendarEntry={() => {}}
  />);
  expect(wrapper).toBeTruthy();
});
