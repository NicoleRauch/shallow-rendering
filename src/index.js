import BabelPolyfill from "babel-polyfill";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SimpleFunctionComponent from "./SimpleFunctionComponent";
import NestedClassComponent from "./NestedClassComponent";
import NestedClassPassingPropComponent from "./NestedClassPassingPropComponent";
import ButtonComponent from "./ButtonComponent";
import CheckboxComponentWithState from "./CheckboxComponentWithState";
import LifecycleComponent from "./LifecycleComponent";

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
    <CheckboxComponentWithState />
    <hr />
    <LifecycleComponent />
    <hr />
    </div>
  , document.getElementById("root")
);

