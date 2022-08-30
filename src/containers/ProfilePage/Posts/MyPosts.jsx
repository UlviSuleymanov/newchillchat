import React from 'react';
import s from './myposts.module.css';
const MyPosts = (props) => {
  return (
    <div className={s.old_post}>
      <img
        src="https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=0%2C0%2C1560%2C780"
        alt="profilepic"
      />
      <p>{props.name}</p>
      <p>{props.text}</p>
      <p>Likes {props.likeCount}</p>
    </div>
  );
};

export default MyPosts;
