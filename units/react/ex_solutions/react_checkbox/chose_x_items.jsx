const React = require("react");
const ReactDom = require("react-dom");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      item1: false,
      item2: false,
      item3: false
    };
  }

  handleCheckBoxChange = e => {
    const { name, checked } = e.target;
    const { count } = this.state;

    this.setState({
      [name]: checked,
      count: checked ? count + 1 : count - 1
    });
  };

  render() {
    const { item1, item2, item3, count } = this.state;

    return (
      <div>
        <ul>
          <li>
            item 1 {" "}
            <input
              name="item1"
              type="checkbox"
              checked={item1}
              onChange={this.handleCheckBoxChange}
            />
          </li>
          <li>
            item 2 {" "}
            <input
              name="item2"
              type="checkbox"
              checked={item2}
              onChange={this.handleCheckBoxChange}
            />
          </li>
          <li>
            item 3 {" "}
            <input
              name="item3"
              type="checkbox"
              checked={item3}
              onChange={this.handleCheckBoxChange}
            />
          </li>
        </ul>
        <p>You chose {count} items</p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
