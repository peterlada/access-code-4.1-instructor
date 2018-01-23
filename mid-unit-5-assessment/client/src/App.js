import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './home';
import Users from './users/users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'> Home </Link>
          <Link to='/users'> User List </Link>
          <Link to='/users/new'> Add New User </Link>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
      </div>
    );
  }
}

export default App;
