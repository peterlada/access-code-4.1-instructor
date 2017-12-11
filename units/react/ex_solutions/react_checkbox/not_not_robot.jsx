import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notARobot: true
    };
  }

  handleCheckboxChange = e => {
    // Using es6 computed property names
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  render() {
    const { notARobot } = this.state;

    return (
      <div>
        <p>
          I am not a robot{" "}
          <input
            name="notARobot"
            type="checkbox"
            checked={notARobot}
            onChange={this.handleCheckboxChange}
          />
        </p>
        <p>{notARobot ? "robots only" : <button>proceed</button>}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
