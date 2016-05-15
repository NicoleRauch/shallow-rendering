import React, {Component} from "react";

export default class extends Component {

  componentWillMount() {
    console.log("Component will mount.");
  }

  componentDidMount() {
    console.log("Component did mount.");
  }

  shouldComponentUpdate() {
    console.log("Should component update?");
    return true;
  }

  componentWillUpdate() {
    console.log("Component will update.");
  }

  componentDidUpdate() {
    console.log("Component did update.");
  }

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
