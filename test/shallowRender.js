import ReactTestUtils from "react-addons-test-utils";

export default function (component) {
  var renderer = ReactTestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
