import React, {Component} from "react";
import SimpleFunctionComponent from "./SimpleFunctionComponent";

export default class extends Component {
  render() {
    return (
      <div>
        <p>Do we have a nested component?</p>
        { this.props.showIt ? <SimpleFunctionComponent /> : null }
      </div>
    );
  }
}
