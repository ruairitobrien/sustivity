/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }]*/
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Login from './Login.jsx';

describe('<Login />', () => {

  it('should render component', () => {
    const wrapper = shallow(
      <Login login={()=>{}} replace={()=>{}} />
    );

    expect(wrapper).to.not.be.a('null');
  });

});
