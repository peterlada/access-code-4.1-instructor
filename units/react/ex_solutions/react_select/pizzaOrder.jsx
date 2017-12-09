const React = require("react");
const ReactDom = require("react-dom");

class Select extends React.Component {
  render() {
    const { values, selectedValue, handleSelect } = this.props
    const displayValues = ['', ...values]

    return (
      <select
        value={selectedValue}
        onChange={handleSelect}
      >
        {displayValues.map(val =>
          <option value={val}>{val}</option>)}
      </select>
    )
  }
}

class PizzaOrder extends React.Component {
  constructor() {
    super();


    this.crusts = ['thin', 'thick']
    this.cheeses = ['mozzarella', 'cheddar', 'colby', 'provolone']
   
    this.state = {
      crust: '',
      cheese: ''
    };
  }
  
  
  handleCheeseSelect = e => {
    this.setState({
      cheese: e.target.value
    })
  };

  handleCrustSelect = e => {
    this.setState({
      crust: e.target.value
    })
  };

  render() {
    const { crust, cheese } = this.state;

    return (
      <div>
        <p>
          Choose your crust: {" "}
          <Select
            values={this.crusts}
            selectedValue={crust}
            handleSelect={this.handleCrustSelect}
          />
        </p>
        <p>
          Choose your cheese: {" "}
          <Select
            values={this.cheeses}
            selectedValue={cheese}
            handleSelect={this.handleCheeseSelect}
          />
        </p>
        { crust && cheese ?
          <div> 
            <p> Order Summary: </p>
            <ul>
              <li> {crust} crust </li>
              <li> {cheese} cheese </li>
            </ul>
          </div>
          : 'Please select a crust and a cheese'
        } 

      </div>
    );
  }
}

ReactDom.render(
  <PizzaOrder />,
  document.getElementById("root")
);
