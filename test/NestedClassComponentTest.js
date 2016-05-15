import React from "react";
import expect from "must";

import shallowRender from "./shallowRender";
import NestedClassComponent from "../src/NestedClassComponent";
import SimpleFunctionComponent from "../src/SimpleFunctionComponent";


describe('NestedClassComponent', function () {

  it('checks the result\'s type and contents', function () {
    const result = shallowRender(<NestedClassComponent />);

    expect(JSON.stringify(result)).to.eql(
      '{"type":"div",' +
      '"key":null,' +
      '"ref":null,' +
      '"props":{"children":' +
      '[{"type":"p","key":null,"ref":null,"props":{"children":"Nested Component with"},"_owner":null,"_store":{}},' +
      '{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}}]' +
      '},' +
      '"_owner":null,' +
      '"_store":{}}');

    expect(result.type).to.be('div');
    expect(result.props.children.length).to.eql(2);

    expect(result.props.children[0].type).to.eql('p');
    expect(result.props.children[1].type).to.eql(SimpleFunctionComponent);

    expect(result.props.children[0].props.children).to.eql('Nested Component with');

    expect(JSON.stringify(result.props.children[1])).to.eql('{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}}');
  });
});
