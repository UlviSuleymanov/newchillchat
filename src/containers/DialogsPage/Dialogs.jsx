import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sendMessage, updateMessage } from '../../features/dialog/dialogsSlice';
import s from './dialogs.module.css';

const Dialogs = () => {
  const dialogsList = useSelector((store) => store.dialogsPage.value);
  const dispatch = useDispatch();
  const elementKey = 'unique_key';
  let newText = '';
  let isSelected = false;
  const [selected, setSelected] = React.useState(isSelected);

  return (
    <div className={s.wrapper} key={Math.random(1 - 100) + elementKey}>
      <div className={s.container}>
        <div className={s.dialogs}>
          {dialogsList.map((dialog) => (
            <NavLink
              onClick={() => setSelected(!selected)}
              key={elementKey + dialog.id + Math.random(1 - 50)}
              className={selected ? s.active : ''}
              to={`/dialog${dialog.id}`}
            >
              {dialog.name}
            </NavLink>
          ))}
        </div>
        <div className={s.messages}>
          {dialogsList.map((dialog) => (
            <p key={elementKey + dialog.id + Math.random(1 - 100)}>{dialog.message}</p>
          ))}
          <div className={s.text_send_wrapper}>
            <textarea
              placeholder="start chatting"
              onChange={(event) => {
                newText = event.target.value;
                dispatch(updateMessage(newText));
              }}
            ></textarea>
            <button
              type="button"
              onClick={() => {
                dispatch(
                  sendMessage({
                    id: dialogsList[dialogsList.length - 1].id + 1 + elementKey,
                    name: '',
                    message: newText,
                  }),
                );
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
