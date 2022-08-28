import React from 'react';
import userPhoto from '../../../assets/images/user.png';

const MyPosts = () => {
  return (
    <div>
      <div>
        <img src={userPhoto} alt="userphoto" />
        <div>User Name</div>
        <div>
          <h4>Add Post</h4>
          <textarea placeholder="What is in your mind?"></textarea>
          <button type="button">Add</button>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
