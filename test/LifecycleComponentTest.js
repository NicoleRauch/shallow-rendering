import React from "react";
import expect from "must";
import { shallow } from "enzyme";

import LifecycleComponent from "../src/LifecycleComponent";

describe('LifecycleComponent', function () {

  it('can observe state changes', function () {
    console.log('Before rendering the component.');
    const wrapper = shallow(<LifecycleComponent />);
    console.log('After rendering the component.');
    wrapper.simulate('change');
    console.log('After clicking the checkbox.');
  });
});
