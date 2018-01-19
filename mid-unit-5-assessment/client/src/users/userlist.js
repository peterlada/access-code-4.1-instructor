import React from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {
  const { users } = props;

  return(
    <div>
      <h1>Users</h1>
      {users.map((user) => {
        return (
            <div>
              <div key={user.id}>{user.username}</div>
              <div>Likes Ice Cream: {user.likesicecream ? "true" : "false"}</div>
            </div>
        )
      }
      )}
    </div>
  )
}

export default UserList;
