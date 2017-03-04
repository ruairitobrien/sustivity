import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import JournalForm from './JournalForm';

describe('<JournalForm />', () => {

  it('should....', () => {
    const wrapper = shallow(<JournalForm currentJournalEntry={{}} journalEntries={[]} addJournalEntry={()=>{}} updateJournalEntry={()=>{}} />);
  });

});
