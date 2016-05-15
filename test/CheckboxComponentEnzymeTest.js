import React from "react";
import expect from "must";
import { shallow } from "enzyme";

import CheckboxComponentWithState from "../src/CheckboxComponentWithState";

describe('CheckboxComponentWithState', function () {

  it('can observe state changes', function () {
    const wrapper = shallow(<CheckboxComponentWithState />);

    expect(wrapper.state('checked')).to.eql(true);

    wrapper.simulate('change');

    expect(wrapper.state('checked')).to.eql(false);

    wrapper.simulate('change');

    expect(wrapper.state('checked')).to.eql(true);
  });

  it('can observe internal property changes', function () {
    const wrapper = shallow(<CheckboxComponentWithState />);

    expect(wrapper.props().checked).to.eql(true);

    wrapper.simulate('change');

    expect(wrapper.props().checked).to.eql(false);

    wrapper.simulate('change');

    expect(wrapper.props().checked).to.eql(true);
  });


});
