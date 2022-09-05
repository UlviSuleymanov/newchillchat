import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          className={styles.image}
          src={props.image ? props.image : userPhoto}
          alt="profilepic"
        />
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Users;
