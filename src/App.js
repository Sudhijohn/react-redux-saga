import React from 'react';
import './style.css';
import UsersList from './UsersList';

export default function App(props) {
  return (
    <div>
      <h1>Users List using Redux-Saga</h1>
      <UsersList />
    </div>
  );
}
