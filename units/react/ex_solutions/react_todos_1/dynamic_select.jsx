import React from "react";
import ReactDom from "react-dom";

const SelectForm = ({ name, handleSubmit, textInput, handleTextInput }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input name={name} type="text" value={textInput} onChange={handleTextInput} />
      <button type="submit"> add </button>
    </form>
  </div>
);

const Select = ({ name, values, handleSelect, selectedValue }) => (
  <select name={name} value={selectedValue} onChange={handleSelect}> {
    ["", ...values].map(val =>
      <option value={val}> {val} </option>)
  } </select>
);

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
        <SelectForm
          name="textInput"
          handleSubmit={this.addValue}
          textInput={textInput}
          handleTextInput={this.handleChange}
        />
        <Select name="selectedValue" handleSelect={this.handleChange} selecetedValue={selectedValue} values={values} />
        <button disabled={!selectedValue} onClick={this.handleSubmit}> submit </button>

        <p> {submittedValue? `You submitted: ${submittedValue}` : ''} </p>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
