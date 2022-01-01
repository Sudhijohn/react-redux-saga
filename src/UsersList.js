import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

const UsersList = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <User name={user.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
