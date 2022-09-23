import TrendsItem from './TrendsItem';
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './trendlist.css';

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <h2 style={{ textAlign: 'center', margin: '15px' }}>List is empty, or not found.</h2>;
  }
  return (
    <div style={{ alignContent: 'center' }}>
      <h2 style={{ textAlign: 'center' }}>Trends</h2>
      <TransitionGroup className="group">
        {posts.map((item, index) => (
          <CSSTransition key={item.id} timeout={500} classNames="post">
            <TrendsItem className="item" remove={remove} post={item} number={index + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
