import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost, updateText } from '../../features/profile/profileSlice';
import MyPosts from './Posts/MyPosts';
import s from './profilepage.module.css';

const ProfilePage = () => {
  let newText = '';
  const state = useSelector((store) => store.profilePage.value);
  const dispatch = useDispatch();
  const elementKey = 'ddownitem_';
  // const [text, setText] = React.useState('');
  const postElements = state.map((data, i) => (
    <MyPosts name={data.name} text={data.text} id={data.id} likeCount={data.likeCount} key={i} />
  ));
  return (
    <div className={s.profile_wrap} key={elementKey + Math.random()}>
      <div className={s.profile_wrap__background}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="backgroundimage"
        />
      </div>
      <div className={s.profile_wrap__content}>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpeg?region=0%2C0%2C1560%2C780"
          alt="profilepic"
        />
        <div className={s.profile_wrap__content_text}>
          <h3>Name Surename</h3>
          <p>Date of Birth</p>
          <p>city</p>
          <p>Education</p>
          <p>Job</p>
        </div>
        <div>
          <h4>Add Post</h4>
          <textarea
            onChange={(event) => {
              newText = event.target.value;
              dispatch(updateText(newText));
            }}
          ></textarea>
          <button
            type="button"
            onClick={() => {
              dispatch(
                addPost({
                  id: elementKey + Math.random(1 - 100),
                  name: 'Ulvi',
                  text: newText,
                  likeCount: 0,
                }),
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
      {postElements}
    </div>
  );
};

export default ProfilePage;
