import ReactTestUtils from "react-addons-test-utils";
import React from "react";
import expect from "must";

import NestedClassComponent from "../src/NestedClassComponent";
import SimpleFunctionComponent from "../src/SimpleFunctionComponent";


describe('NestedClassComponent', function () {

  beforeEach(function () {
    var renderer = ReactTestUtils.createRenderer();
    renderer.render(<NestedClassComponent />);
    this.result = renderer.getRenderOutput();
  });

  it('checks the result\'s type and contents', function () {
    expect(this.result.type).to.be('div');
    expect(this.result.props.children.length).to.eql(2);

    expect(JSON.stringify(this.result)).to.eql(
      '{"type":"div",' +
      '"key":null,' +
      '"ref":null,' +
      '"props":{"children":' +
      '[{"type":"p","key":null,"ref":null,"props":{"children":"Nested Component with"},"_owner":null,"_store":{}},' +
      '{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}}]' +
      '},'+
      '"_owner":null,'+
      '"_store":{}}');

    expect(this.result.props.children[0].type).to.eql('p');
    expect(this.result.props.children[1].type).to.eql(SimpleFunctionComponent);

    expect(this.result.props.children[0].props.children).to.eql('Nested Component with');

    expect(JSON.stringify(this.result.props.children[1])).to.eql('{"key":null,"ref":null,"props":{},"_owner":null,"_store":{}}');
  });
});
