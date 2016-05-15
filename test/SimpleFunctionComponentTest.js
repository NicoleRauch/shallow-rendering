import React from "react";
import expect from "must";

import shallowRender from "./shallowRender";
import SimpleFunctionComponent from "../src/SimpleFunctionComponent";


describe('SimpleFunctionComponent', function () {
  it('checks the result\'s type and contents', function () {
    const result = shallowRender(<SimpleFunctionComponent />);
    expect(JSON.stringify(result)).to.eql('{"type":"p","key":null,"ref":null,"props":{"children":"Simple Function Component"},"_owner":null,"_store":{}}');

    expect(result.type).to.be('p');
    expect(result.props.children).to.eql('Simple Function Component');
  });
});
