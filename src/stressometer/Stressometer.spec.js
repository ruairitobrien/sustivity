/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Stressometer from './Stressometer';

describe('<Stressometer />', () => {

  it('should render component', () => {
    const wrapper = shallow(<Stressometer
      currentStressLevel={0}
      updateJournalEntry={{}}
    />);
    expect(wrapper).to.not.be.a('null');
  });

});
