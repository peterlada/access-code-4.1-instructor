const React = require('react');
const ReactDom = require('react-dom');

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handleAddClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleSubClick = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  handleResetClick = () => {
    this.setState({
      count: 0
    })
  }

  handleRandomClick = () => {
    this.setState({
      count: getRandomNumber(1, 10)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddClick}>
          +
        </button>
        <button onClick={this.handleSubClick}>
          -
        </button>
        <button onClick={this.handleResetClick}>
          Reset
        </button>
        <button onClick={this.handleRandomClick}>
          Random
        </button>
        <p>
          The count is {this.state.count}
        </p>
      </div>
    )
  }
}

ReactDom.render(
  <Counter />,
  document.getElementById('root')
);
