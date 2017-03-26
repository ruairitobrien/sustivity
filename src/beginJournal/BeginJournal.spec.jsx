/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import BeginJournal from './BeginJournal';

describe('<BeginJournal />', () => {

  it('should render component', () => {
    let user = {};
    const wrapper = shallow(<BeginJournal user={user} replace={() => {}} currentJournalEntry={{}} />);

    expect(wrapper).to.not.be.a('null');
  });

});
