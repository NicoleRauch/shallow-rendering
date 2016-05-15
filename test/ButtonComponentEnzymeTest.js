import React from "react";
import sinon from "sinon";
import expect from "must";
import { shallow } from "enzyme";

import ButtonComponent from "../src/ButtonComponent";

describe('ButtonComponent', function () {

  it('simulates click events', function () {
    const handleButtonClick = sinon.spy();
    const wrapper = shallow(
      <ButtonComponent onButtonClick={handleButtonClick} />
    );

    wrapper.find('button').simulate('click');

    expect(handleButtonClick.calledOnce).to.equal(true);
  });
});
