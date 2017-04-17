/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Notes from './Notes.jsx';

describe('<Notes />', () => {

  it('should render component', () => {
    const wrapper = shallow(<Notes
      currentnotes={'test'}
      title={'A title'}
      updateJournalEntry={() => {}}
    />);
    expect(wrapper).to.not.be.a('null');
  });

});
