import React, {Component} from "react";
import SimpleFunctionComponent from "./SimpleFunctionComponent";

export default class extends Component {
  render() {
    return (
      <div>
        <p>Nested Component passing prop with</p>
        <SimpleFunctionComponent passedProp={"Yes!"} />
      </div>
    );
  }
}
