const React = require("react");
const ReactDom = require("react-dom");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectAll: false,
      option1: false,
      option2: false,
      option3: false
    };
  }

  handleCheckBoxChange = e => {
    const { name, checked } = e.target;
    if (name === "selectAll" && checked) {
      this.setState({
        selectAll: true,
        option1: true,
        option2: true,
        option3: true
      });
    } else if (name === "selectAll" && !checked) {
      this.setState({
        selectAll: false,
        option1: false,
        option2: false,
        option3: false
      });
    } else if (!checked) {
      this.setState({
        selectAll: false,
        [name]: checked
      });
    } else {
      this.setState({
        [name]: checked
      });
    }
  };

  render() {
    const { selectAll, option1, option2, option3 } = this.state;

    return (
      <div>
        <ul>
          <li>
            Select All {" "}
            <input
              name="selectAll"
              type="checkbox"
              checked={selectAll}
              onChange={this.handleCheckBoxChange}
            />
          </li>
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
