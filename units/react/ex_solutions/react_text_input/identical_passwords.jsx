const React = require("react");
const ReactDom = require("react-dom");

class InputField extends React.Component {
  constructor() {
    super();
    this.state = {
      password1: '',
      password2: '',
      samePassword: true
    };
  }

  handleInputPwd1 = e => {
    const password1 = e.target.value;
    const {password2} = this.state;

    this.setState({
      password1,
      samePassword: password1 === password2
    })
  };

  handleInputPwd2 = e => {
    const password2 = e.target.value;
    const { password1 } = this.state;

    this.setState({
      password2,
      samePassword: password1 === password2
    })
  };

  clearPasswords = () => {
    this.setState({
      password1: '',
      password2: '',
      samePassword: true
    })
  }
  render() {
    const message = this.state.samePassword ?
      <span className='valid'> Pwds are the same </span>
      : <span className='invalid'> Pwds are not the same </span>

    return (
      <div>
        <p>
          password1: {" "}
          <input
            type="password"
            value={this.state.password1}
            onInput={this.handleInputPwd1}
          />
        </p>
        <p>
          password2: {" "}
          <input
            type="password"
            value={this.state.password2}
            onInput={this.handleInputPwd2}
          />
        </p>
        <button onClick={this.clearPasswords}> 
          clear 
        </button>
        <p>
          {message}
        </p>
      </div>
    );
  }
}

ReactDom.render(
  <InputField />,
  document.getElementById("root")
);
