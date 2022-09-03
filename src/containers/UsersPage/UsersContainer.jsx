import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const UsersContainer = () => {
  const users = useSelector((store) => store.usersPage.users);
  return (
    <div key={nanoid()}>
      {users.map((user) => (
        <div key={nanoid()}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersContainer;
