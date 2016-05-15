import React, {Component} from "react";

export default ({onButtonClick}) => (
  <div>
    <p>Button Component with</p>
    <button type="button"
            onClick={onButtonClick}
    >
      Click me!
    </button>
  </div>
);
