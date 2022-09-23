import React from 'react';
import MyButton from '../../../assets/common/MyButton/MyButton';
import './trendlist.css';
const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__container">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btn">
        <MyButton className="post_btn" onClick={() => props.remove(props.post)}>
          Hide
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
