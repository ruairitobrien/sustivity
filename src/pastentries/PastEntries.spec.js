/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import PastEntries from './PastEntries';

describe('<PastEntries />', () => {

  it('should render component', () => {
    const wrapper = shallow(<PastEntries
      getAllJournalEntries={() => {
      }}
      user={{}}
      journalEntries={[]}
    />);
    expect(wrapper).to.not.be.a('null');
  });

});
