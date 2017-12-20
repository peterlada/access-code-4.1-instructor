import React from "react";
import ReactDom from "react-dom";
import "./style.css";

// function to generate semi-unique ids
const generateId = () => Math.random().toString(34).slice(2);


const TodoForm = ({ inputName, handleSubmit, textInput, handleTextInput }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input name={inputName} type="text" value={textInput} onChange={handleTextInput} />
      <button type="submit"> add </button>
    </form>
  </div>
);

const Todo = ({ todo }) => <li>{todo.text}</li>;

const TodoList = ({ todos }) => (
  <ul>{todos.map(todo => <Todo todo={todo} />)}</ul>
);

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      todos: [],
    };
  }

  addTodo = e => {
    e.preventDefault();

    const { textInput, todos } = this.state;
    const newTodo = { text: textInput, id: generateId() };
    // using the es6 spread operator to create a new array
    const newTodos = [...todos, newTodo];

    this.setState({
      textInput: "",
      todos: newTodos
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { textInput, todos } = this.state;
    return (
      <div>
        <TodoForm
          inputName="textInput"
          handleSubmit={this.addTodo}
          textInput={textInput}
          handleTextInput={this.handleInputChange}
        />
        <TodoList todos={todos} />
      </div>
    );
  }
}


const App = () => (
  <div>
    <h2> Important Todos </h2>
    <TodoApp />
    <h2> Other Todos </h2>
    <TodoApp />
  </div>
)

ReactDom.render(<App />, document.getElementById("root"));
