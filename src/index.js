import BabelPolyfill from "babel-polyfill";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SimpleFunctionComponent from "./SimpleFunctionComponent";
import NestedClassComponent from "./NestedClassComponent";
import NestedClassPassingPropComponent from "./NestedClassPassingPropComponent";
import ButtonComponent from "./ButtonComponent";
import CheckboxComponent from "./CheckboxComponent";
import CheckboxComponentWithState from "./CheckboxComponentWithState";

ReactDOM.render(
  <div>
  <SimpleFunctionComponent />
    <hr/>
    <NestedClassComponent />
    <hr/>
    <NestedClassPassingPropComponent />
    <hr/>
    <ButtonComponent onButtonClick={() => alert("You clicked me!")} />
    <hr/>
    <CheckboxComponent />
    <hr />
    <CheckboxComponentWithState />
    <hr />
    </div>
  , document.getElementById("root")
);

