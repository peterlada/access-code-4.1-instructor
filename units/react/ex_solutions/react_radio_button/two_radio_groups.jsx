const React = require("react");
const ReactDom = require("react-dom");

const namesFromArr = arr => {
  const allButLast = arr.slice(0, arr.length - 1).join(", ");
  const last = arr[arr.length - 1];
  return allButLast + " or " + last;
};

class App extends React.Component {
  constructor() {
    super();
    this.animals = ["cats", "dogs", "giraffes"];
    this.colors = ["green", "red", "blue"];

    this.state = {
      prefAnimal: "",
      prefColor: ""
    };
  }

  handleRadioChange = e => {
    // using es6 computed property name
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    alert("You chose " + Object.values(this.state).join(", "));
  };

  render() {
    const { prefAnimal, prefColor } = this.state;

    return (
      <div>
        <p> Which animal do you prefer: {this.animals.join(", ")} :</p>
        {this.animals.map(animal => (
          <div>
            {animal}
            <input
              type="radio"
              name="prefAnimal"
              value={animal}
              checked={prefAnimal === animal}
              onChange={this.handleRadioChange}
            />
          </div>
        ))}

        <p> Which color do you prefer: {namesFromArr(this.colors)} :</p>
        {this.colors.map(color => (
          <div>
            {color}
            <input
              type="radio"
              name="prefColor"
              value={color}
              checked={prefColor === color}
              onChange={this.handleRadioChange}
            />
          </div>
        ))}
        <button disabled={!prefAnimal || !prefColor} onClick={this.submit}>
          {" "}
          submit{" "}
        </button>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
