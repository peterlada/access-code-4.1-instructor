const React = require("react");
const ReactDom = require("react-dom");

class Reverser extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      input: e.target.value
    })
  };

  render() {
    const { input } = this.state
    const reverseInput = input.split('').reverse().join('')

    return (
      <div>
        <p>
          <input
            value={input}
            onInput={this.handleInputChange}
          />
        </p>
        <p> {reverseInput} </p>
      </div>
    );
  }
}

ReactDom.render(
  <Reverser />,
  document.getElementById("root")
);
