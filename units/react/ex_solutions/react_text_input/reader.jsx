const React = require("react");
const ReactDom = require("react-dom");

/* 
Add the following in index.html:
<style>
		.small {
			font-size: 12px;
		}
		.medium {
			font-size: 14px;
		}
		.large {
			font-size: 16px;
		}
	</style>
*/
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
  `


class Reader extends React.Component {
  constructor() {
    super();
    this.state = {
      fontSize: 'small'
    };
    this.fontSizes = ['small', 'medium', 'large']
  }
  
  handleInputChange = e => {
    this.setState({
      fontSize: e.target.value
    })
  };

  render() {
    const fontClass = 
      this.fontSizes.includes(this.state.fontSize)?
        this.state.fontSize : 'small'

    return (
      <div>
        <p>
          fontsize: {" "}
          <input
            value={this.state.fontSize}
            onInput={this.handleInputChange}
          />
        </p>
        <pre className={fontClass}>
          {this.props.text}
        </pre>
      </div>
    );
  }
}

ReactDom.render(
  <Reader text={text}/>,
  document.getElementById("root")
);
