import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import WorkProportion from './WorkProportion';

it('renders without crashing', () => {
  const wrapper = shallow(<WorkProportion
    currentWorkProportions={{}}
    updateJournalEntry={() => {}}/>);
    expect(wrapper).toBeTruthy();
});
