import React from "react";
import expect from "must";

import shallowRender from "./shallowRender";
import NotReallyNestedClassComponent from "../src/NotReallyNestedClassComponent";

describe('NotReallyNestedClassComponent', function () {
  it('checks the result\'s type and contents', function () {
    const result = shallowRender(<NotReallyNestedClassComponent showIt={false} />);

    expect(JSON.stringify(result)).to.eql(
      '{"type":"div","key":null,"ref":null,"props":{"children":[' +
      '{"type":"p","key":null,"ref":null,"props":{"children":"Do we have a nested component?"},"_owner":null,"_store":{}},' +
      'null' +
      ']},"_owner":null,"_store":{}}');

    expect(result.type).to.be('div');
    expect(result.props.children.length).to.eql(2);

    expect(result.props.children[0].type).to.eql('p');
    expect(result.props.children[1]).to.eql(null);
  });
});
