import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import Users from './Users';
import LoadingSvg from '../../assets/images/Spinner.svg';
import styles from './users.module.css';
import { fetchUsers } from '../../features/user/usersSlice';

const UsersContainer = () => {
  const users = useSelector((store) => store.usersPage.users);
  const isLoading = useSelector((store) => store.usersPage.loading);
  const pageSize = useSelector((store) => store.usersPage.pageSize);
  const totalUsersCount = useSelector((store) => store.usersPage.totalUsersCount);
  const currentPage = useSelector((store) => store.usersPage.currentPage);
  const dispatch = useDispatch();

  const initFetch = useCallback(
    (currentPage, pageSize) => {
      dispatch(fetchUsers(currentPage, pageSize));
    },
    [dispatch],
  );

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => (
          <span key={nanoid()} className={currentPage === p ? styles.selected : ''}>
            {p}
          </span>
        ))}
      </div>
      {isLoading ? <img src={LoadingSvg} alt="loading" /> : ''}
      {isLoading
        ? ''
        : users.map((user) => <Users name={user.name} image={user.photos.small} key={nanoid()} />)}
    </div>
  );
};

export default UsersContainer;
