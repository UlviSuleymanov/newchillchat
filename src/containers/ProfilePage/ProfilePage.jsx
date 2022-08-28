import React from 'react';
import MyPosts from './Posts/MyPosts';
import s from './profilepage.module.css';

const ProfilePage = (props) => {
  return (
    <div className={s.wrapper}>
      <MyPosts />
    </div>
  );
};

export default ProfilePage;
