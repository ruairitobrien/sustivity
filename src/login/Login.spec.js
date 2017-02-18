import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import Login from './Login';

import RaisedButton from 'material-ui/RaisedButton';

describe('<Login />', () => {

  it('should say \'So Simple!\'', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find(RaisedButton)).to.have.length(1);
  });

});
