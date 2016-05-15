import React, {Component} from "react";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: true};
  }

  render() {
    return (
        <input type="checkbox"
               checked={this.state.checked}
               onChange={(e) => { this.setState({checked: !this.state.checked}) }}
        />
    );
  }
}
