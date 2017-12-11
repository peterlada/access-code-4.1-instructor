const React = require("react");
const ReactDom = require("react-dom");

const namesFromArr = arr => {
  const allButLast = arr.slice(0, arr.length - 1).join(", ");
  const last = arr[arr.length - 1];
  return allButLast + " or " + last;
};

const RadioGroup = props => {
  const { name, values, selectedValue, handleChange } = props;

  return (
    <div>
      {values.map(value => (
        <div>
          {value}
          <input
            type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
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
        <p> Which animal do you prefer: {namesFromArr(this.animals)} :</p>

        <RadioGroup
          name="prefAnimal"
          values={this.animals}
          selectedValue={prefAnimal}
          handleChange={this.handleRadioChange}
        />

        <p> Which color do you prefer: {namesFromArr(this.colors)} :</p>
        <RadioGroup
          name="prefColor"
          values={this.colors}
          selectedValue={prefColor}
          handleChange={this.handleRadioChange}
        />
        
        <p>
          <button disabled={!prefAnimal || !prefColor} onClick={this.submit}>
          submit
          </button>
        </p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
