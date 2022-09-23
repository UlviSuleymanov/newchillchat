import React from 'react';
import MyButton from '../../../assets/common/MyButton/MyButton';
import MyInput from '../../../assets/common/MyInput/MyInput';

const TrendForm = (props) => {
  const [post, setPost] = React.useState({
    title: '',
    body: '',
  });
  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    setPost({
      title: '',
      body: '',
    });
    props.create(newPost);
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Header"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Body"
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  );
};

export default TrendForm;
