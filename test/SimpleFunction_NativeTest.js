import ReactTestUtils from "react-addons-test-utils";
import React from "react";
import expect from "must";

import SimpleFunctionComponent from "../src/SimpleFunctionComponent";


describe('SimpleFunctionComponent', function () {
  it('checks the result\'s type and contents', function () {
    var renderer = ReactTestUtils.createRenderer();
    renderer.render(<SimpleFunctionComponent />);
    var result = renderer.getRenderOutput();

    expect(result.type).to.be('p');
    expect(result.props.children).to.eql('Simple Function Component');

    console.log(JSON.stringify(result))
  });
});
