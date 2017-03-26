/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import AppBar from 'material-ui/AppBar';
import HomePage from './HomePage';

describe('<HomePage />', () => {

  it('should render component', () => {
    const user = {photoUrl: 'test'};

    const wrapper = shallow(<HomePage user={user} logout={() => {
    }}/>);

    expect(wrapper.find(AppBar)).to.have.length(1);
  });

});
