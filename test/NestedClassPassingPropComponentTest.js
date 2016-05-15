import React from "react";
import expect from "must";

import shallowRender from "./shallowRender";
import NestedClassPassingPropComponent from "../src/NestedClassPassingPropComponent";
import SimpleFunctionComponent from "../src/SimpleFunctionComponent";


describe('NestedClassPassingPropComponent', function () {

  it('checks the result\'s type and contents', function () {
    const result = shallowRender(<NestedClassPassingPropComponent />);

    expect(result.type).to.be('div');
    expect(result.props.children.length).to.eql(2);

    expect(JSON.stringify(result)).to.eql(
      '{"type":"div",' +
      '"key":null,' +
      '"ref":null,' +
      '"props":{"children":' +
      '[{"type":"p","key":null,"ref":null,"props":{"children":"Nested Component passing prop with"},"_owner":null,"_store":{}},' +
      '{"key":null,"ref":null,"props":{"passedProp":"Yes!"},"_owner":null,"_store":{}}]' +
      '},'+
      '"_owner":null,'+
      '"_store":{}}');

    expect(result.props.children[0].type).to.eql('p');
    expect(result.props.children[1].type).to.eql(SimpleFunctionComponent);
    expect(result.props.children[1].props).to.eql({passedProp: "Yes!"});
    expect(result.props.children[1].props.passedProp).to.eql("Yes!");

    expect(result.props.children[0].props.children).to.eql('Nested Component passing prop with');

    expect(JSON.stringify(result.props.children[1])).to.eql('{"key":null,"ref":null,"props":{"passedProp":"Yes!"},"_owner":null,"_store":{}}');
  });
});
