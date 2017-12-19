import React from "react";
import ReactDom from "react-dom";

const RadioForm = ({ name, handleSubmit, textInput, handleTextInput }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input name={name} type="text" value={textInput} onChange={handleTextInput} />
      <button type="submit"> add </button>
    </form>
  </div>
);


const RadioGroup = ({ name, values, selectedValue, handleChange }) => {
  console.log('radiogroup selectedValue: ', selectedValue)
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
  )
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      selectedValue: "",
      values: [],
      submittedValue: ""
    };
  }

  addValue = e => {
    e.preventDefault();

    const { textInput, values } = this.state;
    // using the es6 spread operator to create a new array
    const newValues = [...values, textInput];

    this.setState({
      textInput: "",
      values: newValues
    });
  };

  handleSubmit = e => {
    const { selectedValue } = this.state;
    this.setState({
      submittedValue: selectedValue
    })
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state)
    const { selectedValue, submittedValue, textInput, values } = this.state;
    return (
      <div>
        <h2>Select</h2>
        <RadioForm
          name="textInput"
          handleSubmit={this.addValue}
          textInput={textInput}
          handleTextInput={this.handleChange}
        />
        <RadioGroup name="selectedValue" handleChange={this.handleChange}
          selectedValue={selectedValue} values={values} />
        <button disabled={!selectedValue} onClick={this.handleSubmit}> submit </button>

        <p> {submittedValue ? `You submitted: ${submittedValue}` : ''} </p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
