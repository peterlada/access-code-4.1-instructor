const React = require("react");
const ReactDom = require("react-dom");

const fontSizes = {
  small: {
    fontSize: "12px"
  },
  medium: {
    fontSize: "14px"
  },
  large: {
    fontSize: "16px"
  },
  humongous: {
    fontSize: "48px"
  }
};

const text = `
  You are old, Father William (Carroll)
  “You are old, father William,” the young man said,
  “And your hair has become very white;
  And yet you incessantly stand on your head–
  Do you think, at your age, it is right?”

  “In my youth,” father William replied to his son,
  “I feared it might injure the brain;
  But now that I’m perfectly sure I have none,
  Why, I do it again and again.”
  `;

class Reader extends React.Component {
  constructor() {
    super();
    this.state = {
      userFontSize: "small"
    };
    this.fontSizes = ["small", "medium", "large", "humongous"];
  }

  handleRadioChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { userFontSize } = this.state;

    return (
      <div>
        <p>
          fontsize: {" "}
          {this.fontSizes.map(fontSize => (
            <div>
              {fontSize}
              <input
                type="radio"
                name="userFontSize"
                value={fontSize}
                checked={userFontSize === fontSize}
                onChange={this.handleRadioChange}
              />
            </div>
          ))}
        </p>
        <pre style={fontSizes[userFontSize]}>{this.props.text}</pre>
      </div>
    );
  }
}

ReactDom.render(<Reader text={text} />, document.getElementById("root"));
