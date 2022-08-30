import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../features/user/usersSlice';
import * as axios from 'axios';
const Users = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const dispatch = useDispatch();
  const UserState = useSelector((store) => store.usersPage.value);

  return (
    <div>
      <button
        type="button"
        onChange={() => setIsLoaded(!isLoaded)}
        onClick={() => {
          dispatch(getUser());
        }}
      >
        Load Users
      </button>
      {UserState.map((user) => (
        <div>{user}</div>
      ))}
    </div>
  );
};

export default Users;
