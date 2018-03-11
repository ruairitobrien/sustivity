import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Prodometer from './Prodometer';

it('renders without crashing', () => {
  const wrapper = shallow(<Prodometer
    currentProductivityLevel={0}
    updateJournalEntry={() => {}} />);
  expect(wrapper).toBeTruthy();
});
