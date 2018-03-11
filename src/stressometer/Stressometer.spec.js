import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Stressometer from './Stressometer';

it('renders without crashing', () => {
  const wrapper = shallow(<Stressometer
    currentStressLevel={0}
    updateJournalEntry={() => {}}/>);
    expect(wrapper).toBeTruthy();
});
