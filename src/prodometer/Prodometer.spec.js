/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Prodometer from './Prodometer';

describe('<Prodometer />', () => {

  it('should render component', () => {
    const wrapper = shallow(<Prodometer
      currentProductivityLevel={0}
      updateJournalEntry={{}}
    />);
    expect(wrapper).to.not.be.a('null');
  });

});
