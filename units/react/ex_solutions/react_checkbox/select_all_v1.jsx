const React = require("react");
const ReactDom = require("react-dom");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      option1: false,
      option2: false,
      option3: false
    };
  }

  selectAll = e => {
    this.setState({
      option1: true,
      option2: true,
      option3: true
    });
  };

  selectNone = e => {
    this.setState({
      option1: false,
      option2: false,
      option3: false
    });
  };
  
  handleCheckBoxChange = e => {
    const { name, checked } = e.target;

    this.setState({
      [name]: checked,
      likesNeither: false
    });
  };

  render() {
    const { option1, option2, option3 } = this.state;

    return (
      <div>
        <p>
          <button onClick={this.selectAll}>Select All</button>{" "}
          <button onClick={this.selectNone}>Select None</button>
        </p>
        <ul>
          <li>
            Option 1 {" "}
            <input
              name="option1"
              type="checkbox"
              checked={option1}
              onChange={this.handleCheckBoxChange}
            />
          </li>
          <li>
            Option 2 {" "}
            <input
              name="option2"
              type="checkbox"
              checked={option2}
              onChange={this.handleCheckBoxChange}
            />
          </li>
          <li>
            Option 3 {" "}
            <input
              name="option3"
              type="checkbox"
              checked={option3}
              onChange={this.handleCheckBoxChange}
            />
          </li>
        </ul>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
