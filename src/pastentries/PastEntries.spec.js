import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import PastEntries from './PastEntries';

it('renders without crashing', () => {
  const wrapper = shallow(<PastEntries
    user={{}}
    journalEntries={{}}
    getAllJournalEntries={()=>{}}
    deleteJournalEntry={()=>{}}
    replace={()=>{}} />);
  expect(wrapper).toBeTruthy();
});
