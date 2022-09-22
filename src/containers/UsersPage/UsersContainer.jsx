import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Users from './Users';
import LoadingSvg from '../../assets/images/Spinner.svg';
import { fetchUsers } from '../../features/user/usersSlice';

const UsersContainer = () => {
  const users = useSelector((store) => store.usersPage.users);
  const isLoading = useSelector((store) => store.usersPage.loading);
  const dispatch = useDispatch();

  const initFetch = useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  return (
    <div>
      {isLoading ? <img src={LoadingSvg} alt="loading" /> : ''}
      {isLoading ? '' : users.map((user) => <Users name={user.name} key={nanoid()} />)}
    </div>
  );
};

export default UsersContainer;
