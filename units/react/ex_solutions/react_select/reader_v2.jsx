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

const React = require("react");
const ReactDom = require("react-dom");

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


class Select extends React.Component {
  render() {
    const { values, selectedValue, handleSelect } = this.props

    return (
      <select
        value={selectedValue}
        onChange={handleSelect}
      >
        {values.map(val =>
          <option value={val}>{val}</option>)}
      </select>
    )
  }
}

class Reader extends React.Component {
  constructor() {
    super();
    this.state = {
      fontClass: 'small'
    };
    this.fontSizes = ['small', 'medium', 'large']
  }
  
  
  handleFontSelect = e => {
    this.setState({
      fontClass: e.target.value
    })
  };

  render() {
    const { fontClass } = this.state;

    return (
      <div>
        <p>
          Font Size: {" "}
          <Select
            values={this.fontSizes}
            selectedValue={fontClass}
            handleSelect={this.handleFontSelect}
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
