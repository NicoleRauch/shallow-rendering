import ReactTestUtils from "react-addons-test-utils";
import React from "react";
import expect from "must";

import SimpleFunctionComponent from "../src/SimpleFunctionComponent";


describe('SimpleFunctionComponent', function () {
  beforeEach(function () {
    var renderer = ReactTestUtils.createRenderer();
    renderer.render(<SimpleFunctionComponent />);
    this.result = renderer.getRenderOutput();
  });

  it('checks the result\'s type and contents', function () {
    expect(JSON.stringify(this.result)).to.eql('{"type":"p","key":null,"ref":null,"props":{"children":"Simple Function Component"},"_owner":null,"_store":{}}');

    expect(this.result.type).to.be('p');
    expect(this.result.props.children).to.eql('Simple Function Component');
  });
});
