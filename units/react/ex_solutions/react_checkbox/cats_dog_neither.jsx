const React = require("react");
const ReactDom = require("react-dom");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      likesCats: false,
      likesDogs: false,
      likesNeither: false
    };
  }

  handleCheckBoxChange = e => {
    const { name, checked } = e.target;
    if (name === "likesNeither" && checked) {
      this.setState({
        likesCats: false,
        likesDogs: false,
        likesNeither: true
      });
    } else {
      this.setState({
        [name]: checked,
        likesNeither: false
      });
    }
  };

  render() {
    const { likesCats, likesDogs, likesNeither } = this.state;

    return (
      <div>
        <ul>
          <li>
            I Like Cats {" "}
            <input
              name="likesCats"
              type="checkbox"
              checked={likesCats}
              disabled={likesNeither}
              onChange={this.handleCheckBoxChange}
            />
          </li>
          <li>
            I Like dogs {" "}
            <input
              name="likesDogs"
              type="checkbox"
              checked={likesDogs}
              disabled={likesNeither}
              onChange={this.handleCheckBoxChange}
            />
          </li>
          <li>
            I don't like either {" "}
            <input
              name="likesNeither"
              type="checkbox"
              checked={likesNeither}
              onChange={this.handleCheckBoxChange}
            />
          </li>
        </ul>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
