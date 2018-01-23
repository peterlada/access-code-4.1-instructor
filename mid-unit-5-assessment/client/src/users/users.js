import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import UserList from './userlist';

class Users extends React.Component {
  constructor() {
    super();
    this.state = { users: [] }
  }

  componentDidMount() {
  }

  renderUserList = () => {
    const { users } = this.state;

    return (
      <UserList users={users} />
    )
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/users' render={ this.renderUserList } />
      </div>
    );
  }
}

export default Users;
