/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import DoneJournal from './DoneJournal.jsx';

describe('<DoneJournal />', () => {

  it('should render component', () => {
    let user = {};
    const wrapper = shallow(<DoneJournal user={user} replace={() => {}} currentJournalEntry={{}} />);

    expect(wrapper).to.not.be.a('null');
  });

});
