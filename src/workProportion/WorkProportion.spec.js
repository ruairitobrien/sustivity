import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import WorkProportion from "./WorkProportion";

describe('<WorkProportion />', () => {

  it('should render component', () => {
    const wrapper = shallow(<WorkProportion
      initialWorkProportion={{}}
      onChange={(updatedWorkProportion) => {
      }}
    />);
  });

});
